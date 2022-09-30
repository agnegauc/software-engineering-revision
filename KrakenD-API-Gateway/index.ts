import express from "express";
import cors from "cors";
import { dateRouter } from "./routes/date/date.router";
import { debugRouter } from "./routes/debug/debug.router";
import { numberRouter } from "./routes/number/number.router";

const PORT = 3_001;

const app = express();
app.use(cors());

app.use("/date", dateRouter);
app.use("/number", numberRouter);
app.use("/__debug", debugRouter);

app.listen(PORT, "YourIPV4", () => console.log(`Listening to port ${PORT}.`));
