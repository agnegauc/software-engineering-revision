import { DynamoDB, AWSError } from "aws-sdk";
import express from "express";
import serverless from "serverless-http";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

const USERS_TABLE = `${process.env.USERS_TABLE ?? "users"}-table-${
  process.env.ENV ?? "production"
}`; // Todo: terraform /amazon var
// Todo: rename & refactor
// Todo: implement schemas
const app = express();
const dynamoDbClient = new DynamoDB.DocumentClient();

app.use(express.json());

app.get("/users/:userId", async (req, res) => {
  const dbParams: DocumentClient.GetItemInput = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(dbParams).promise();

    if (Item) {
      const { userId, firstName } = Item;

      res.json({ userId, firstName });
    } else {
      res
        .status(404)
        .json({ error: 'Could not find user with provided "userId"' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive user" });
  }
});

app.get("/users", async (_, res) => {
  const dbParams: DocumentClient.ScanInput = {
    TableName: USERS_TABLE,
  };

  const onScan = (err: AWSError, data: DocumentClient.ScanOutput) => {
    if (err) {
      return res.status(500).json({ error: "Could not find users" });
    }

    console.log("Scan succeeded.");

    res.json({ data });

    const shouldContinueScanning = typeof data.LastEvaluatedKey !== "undefined";

    if (shouldContinueScanning) {
      console.log("Scanning for more...");

      dbParams.ExclusiveStartKey = data.LastEvaluatedKey;

      dynamoDbClient.scan(dbParams, onScan);
    }
  };

  dynamoDbClient.scan(dbParams, onScan);
});

app.post("/users", async (req, res) => {
  const { userId, firstName } = req.body;

  if (typeof userId !== "string") {
    res.status(400).json({ error: '"userId" must be a string' });
  } else if (typeof firstName !== "string") {
    res.status(400).json({ error: '"firstName" must be a string' });
  }

  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId,
      firstName,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();

    res.json({ userId, firstName });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Could not create user", USERS_TABLE });
  }
});

app.use((_, res, ___) => {
  return res.status(404).json({
    error: "Route not found.",
  });
});

export const main = serverless(app);
