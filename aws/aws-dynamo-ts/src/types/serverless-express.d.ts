declare module "serverless-express/express" {
  import express from "express";

  export = express;
}

declare module "serverless-express/handler" {
  import { Express } from "express";

  export type THandlerEvent = {
    headers: {
      "Transfer-Encoding": unknown;
    };
    multiValueHeaders: {
      "Transfer-Encoding": unknown;
    };
  };

  export default function (
    app: Express
  ): (event: THandlerEvent, context: Record<string, unknown>) => void;
}
