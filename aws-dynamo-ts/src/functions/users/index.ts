import { getHandlerPath } from "src/utils/handler-resolver";
import { postUserSchema } from "./postUserSchema";

const POST_ROUTES = [
  {
    http: {
      method: "POST",
      path: "/users",
      request: {
        schemas: {
          "application/json": postUserSchema,
        },
      },
    },
  },
] as const;

const GET_ROUTES = [
  {
    http: {
      method: "GET",
      path: `/users/{userId}`,
    },
  },
  {
    http: {
      method: "GET",
      path: `/users`,
    },
  },
] as const;

export const users = {
  handler: `${getHandlerPath(__dirname)}/handler.main` as const,
  events: [...GET_ROUTES, ...POST_ROUTES],
};
