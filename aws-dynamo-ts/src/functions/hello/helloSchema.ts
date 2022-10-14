export const helloSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    year: { type: "number" },
  },
  required: ["name", "year"],
} as const;
