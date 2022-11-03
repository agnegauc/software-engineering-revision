import { Express } from "express";
import { createUser } from "./users/createUser";
import { getUser } from "./users/getUser";
import { getUsers } from "./users/getUsers";

export const attachRouter = (app: Express) => {
  const ROUTE_BEGINNING = "/users";

  app.get(`${ROUTE_BEGINNING}/:userId`, getUser);

  app.get(`${ROUTE_BEGINNING}`, getUsers);

  app.post(`${ROUTE_BEGINNING}`, createUser);
};
