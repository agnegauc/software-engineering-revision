"use strict";

module.exports.hello = async (event, ctx, cb) => {
  const { firstName = "visitor", age = (Math.random() * 25) | 0 } =
    event?.queryStringParameters ?? {};

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello ${firstName}! You are ${age} years old.`,
      },
      null,
      2
    ),
  };
};
