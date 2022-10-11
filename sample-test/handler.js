"use strict";

module.exports.greeting = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello!`,
      },
      null,
      2
    ),
  };
};

module.exports.hello = async (event, ctx, cb) => {
  const { name, age } = event?.queryStringParameters ?? {
    name: "Tom",
    age: (Math.random() * 25) | 0,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello ${name}! You are ${age} years old.`,
      },
      null,
      2
    ),
  };
};
