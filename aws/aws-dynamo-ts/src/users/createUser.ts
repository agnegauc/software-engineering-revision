import type { RequestHandler } from "express";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";
import { DynamoDB } from "aws-sdk";

export const createUser: RequestHandler = async (req, res) => {
  const dynamoDbClient = new DynamoDB.DocumentClient();
  const { userId, firstName } = req.body;

  const params: DocumentClient.PutItemInput = {
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
};
