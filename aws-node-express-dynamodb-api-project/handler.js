const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");

const app = express();
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();
const USERS_TABLE = process.env.USERS_TABLE;

// TODO: refactor
app.use(express.json());

app.get("/users/:userId", async function (req, res) {
  const dbParams = {
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

app.get("/users", async function (_, res) {
  const dbParams = {
    TableName: USERS_TABLE,
  };

  function onScan(err, data) {
    if (err) {
      res.status(500).json({ error: "Could not find users" });
    } else {
      console.log("Scan succeeded.");

      res.json({ data });

      const shouldContinueScanning =
        typeof data.LastEvaluatedKey !== "undefined";

      if (shouldContinueScanning) {
        console.log("Scanning for more...");

        dbParams.ExclusiveStartKey = data.LastEvaluatedKey;

        dynamoDbClient.scan(dbParams, onScan);
      }
    }
  }

  dynamoDbClient.scan(dbParams, onScan);
});

app.post("/users", async function (req, res) {
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

    res.status(500).json({ error: "Could not create user" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
