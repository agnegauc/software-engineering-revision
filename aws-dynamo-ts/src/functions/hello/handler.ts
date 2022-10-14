import type { TValidatedEventAPIGatewayProxyEvent } from "src/utils/types";
import { formatJSONResponse } from "src/utils/api-gateway";
import { middyfy } from "src/utils/lambda";
import { helloSchema } from "./helloSchema";

const hello: TValidatedEventAPIGatewayProxyEvent<typeof helloSchema> = async (
  event
) => {
  const { name, year } = event.body;

  return formatJSONResponse({
    message: `${name}! It is ${year}!`,
  });
};

export const main = middyfy(hello);
