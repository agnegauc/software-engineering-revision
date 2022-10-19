import handler from "serverless-express/handler";
import serverless from "serverless-http";
import app from "./app";

export const handle: ReturnType<typeof handler> = (event, context) => {
  delete event.headers["Transfer-Encoding"];
  delete event.multiValueHeaders["Transfer-Encoding"];

  return serverless(app)(event, context);
};
