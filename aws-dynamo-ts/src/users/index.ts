const POST_ROUTES = [
  {
    http: {
      method: "POST",
      path: "/users",
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
  handler: `src/handler.handle` as const,
  events: [...GET_ROUTES, ...POST_ROUTES],
};
