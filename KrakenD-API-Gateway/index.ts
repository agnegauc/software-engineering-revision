import express from "express";
import cors from "cors";
import { dateRouter } from "./routes/date/date.router";
import { greetingRouter } from "./routes/greeting/greeting.router";
import { numberRouter } from "./routes/number/number.router";

const PORT = 3_001;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/date", dateRouter);
app.use("/number", numberRouter);
app.use("/greeting", greetingRouter);

// https://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js
app.listen(PORT, "YOUR_IP", () => console.log(`Listening to port ${PORT}.`));
