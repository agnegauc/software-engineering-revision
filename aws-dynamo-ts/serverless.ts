import type { AWS } from "@serverless/typescript";
import { users } from "src/users";

const USERS_TABLE = "users";

const usersTableConfig = {
  Type: "AWS::DynamoDB::Table",
  Properties: {
    AttributeDefinitions: [
      {
        AttributeName: "userId",
        AttributeType: "S",
      },
    ],
    KeySchema: [{ AttributeName: "userId", KeyType: "HASH" }],
    BillingMode: "PAY_PER_REQUEST",
    TableName: USERS_TABLE,
  },
};

const serverlessConfiguration: AWS = {
  service: "aws-dynamo-ts-000",
  org: "jonasgirdzijauskas",
  app: "dynamo-serverless",
  configValidationMode: "error",

  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    ecr: {
      images: {
        appimage: {
          path: "./",
        },
      },
    },
    runtime: "nodejs16.x",
    iam: {
      role: {
        statements: [
          {
            Effect: "Allow",
            Action: [
              "dynamodb:Query",
              "dynamodb:Scan",
              "dynamodb:GetItem",
              "dynamodb:PutItem",
              "dynamodb:UpdateItem",
              "dynamodb:DeleteItem",
            ],
            Resource: {
              "Fn::GetAtt": ["UsersTable", "Arn"],
            },
          },
        ],
      },
    },

    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      SERVERLESS_EXPRESS_PLATFORM: "aws",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      USERS_TABLE: USERS_TABLE,
    },
  },

  functions: {
    users,
  },
  package: { individually: true },
  custom: {
    tableName: USERS_TABLE,
  },

  resources: {
    Resources: {
      UsersTable: usersTableConfig,
    },
  },
};

module.exports = serverlessConfiguration;
