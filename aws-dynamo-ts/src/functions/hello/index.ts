import { helloSchema } from "./helloSchema";
import { getHandlerPath } from "src/utils/handler-resolver";

export const hello = {
  handler: `${getHandlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "hello",
        request: {
          schemas: {
            "application/json": helloSchema,
          },
        },
      },
    },
  ],
};
