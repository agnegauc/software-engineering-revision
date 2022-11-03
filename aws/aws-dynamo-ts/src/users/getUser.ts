import type { RequestHandler } from "express";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";
import { DynamoDB } from "aws-sdk";

export const getUser: RequestHandler = async (req, res) => {
  const dynamoDbClient = new DynamoDB.DocumentClient();

  const dbParams: DocumentClient.GetItemInput = {
    TableName: process.env.USERS_TABLE!,
    Key: {
      userId: req.params.userId,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(dbParams).promise();

    if (Item) {
      const { userId, firstName } = Item;

      res.json({ userId, firstName });
      return;
    }

    res
      .status(404)
      .json({ error: 'Could not find user with provided "userId"' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive user" });
  }
};
