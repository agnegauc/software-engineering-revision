import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import { FromSchema, JSONSchema } from "json-schema-to-ts";

type TValidatedAPIGatewayProxyEvent<S extends JSONSchema> = Omit<
  APIGatewayProxyEvent,
  "body"
> & {
  body: FromSchema<S>;
};

export type TValidatedEventAPIGatewayProxyEvent<S extends JSONSchema> = Handler<
  TValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;
