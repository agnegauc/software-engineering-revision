import type { RequestHandler } from "express";
import type { AWSError } from "aws-sdk";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";
import { DynamoDB } from "aws-sdk";

export const getUsers: RequestHandler = async (_, res) => {
  const dynamoDbClient = new DynamoDB.DocumentClient();

  const dbParams: DocumentClient.ScanInput = {
    TableName: process.env.USERS_TABLE!,
  };

  const onScan = async (err: AWSError, data: DocumentClient.ScanOutput) => {
    if (err) {
      return res.status(500).json({ error: "Could not find users" });
    }

    console.log("Scan succeeded.");

    res.json({ data });

    // TODO: investigate whether beneficial
    // const shouldContinueScanning = !!data.LastEvaluatedKey;
    // if (shouldContinueScanning) {
    //   console.log("Scanning for more...");

    //   dbParams.ExclusiveStartKey = data.LastEvaluatedKey;

    //       await dynamoDbClient.scan(dbParams, onScan).promise();
    // }
  };

  dynamoDbClient.scan(dbParams, onScan);
};
