import express from "express";
import { attachRouter } from "./router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

attachRouter(app);

export default app;
