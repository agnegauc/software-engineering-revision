export const postUserSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    userId: { type: "string" },
  },
  required: ["firstName", "userId"],
} as const;
