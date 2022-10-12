"use strict";

module.exports.greeting = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Greetings!`,
      },
      null,
      2
    ),
  };
};
