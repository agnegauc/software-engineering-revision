import { DynamoDB, AWSError } from "aws-sdk";
import express from "express";
import serverless from "serverless-http";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";
import { getUser } from "./getUser";

const app = express();
const dynamoDbClient = new DynamoDB.DocumentClient();

app.use(express.json());

// todo: router
app.get("/users/:userId", getUser);

app.get("/users", async (_, res) => {
  const dbParams: DocumentClient.ScanInput = {
    TableName: process.env.USERS_TABLE!,
  };

  const onScan = (err: AWSError, data: DocumentClient.ScanOutput) => {
    if (err) {
      return res.status(500).json({ error: "Could not find users" });
    }

    console.log("Scan succeeded.");

    res.json({ data });

    const shouldContinueScanning = !!data.LastEvaluatedKey;

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
    TableName: process.env.USERS_TABLE!,
    Item: {
      userId,
      firstName,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();

    res.json({ userId, firstName });
  } catch (error) {
    res.status(500).json({ error: "Could not create user" });
  }
});

app.use((_, res, ___) => {
  res.status(404).json({
    error: "Route not found.",
  });
});

export const main = serverless(app);
