import type { AWS } from "@serverless/typescript";
import { hello } from "@functions/hello";
import { users } from "@functions/users"; // TODO: index

const USERS_TABLE = "users"; // terraform env var?

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
  service: "aws-dynamo-ts",
  org: "jonasgirdzijauskas",
  app: "dynamo-serverless",
  configValidationMode: "error",

  frameworkVersion: "3",
  plugins: ["serverless-esbuild"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
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

    // apiGateway: {
    //   minimumCompressionSize: 1024,
    //   shouldStartNameWithService: true,
    // },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      USERS_TABLE: "users",
    },
  },

  functions: {
    hello,
    users,
  },
  package: { individually: true },
  custom: {
    tableName: USERS_TABLE,

    esbuild: {
      bundle: true,
      minify: false, // TODO: investigate why not minified
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },

  resources: {
    Resources: {
      UsersTable: usersTableConfig,
    },
  },
};

module.exports = serverlessConfiguration;
