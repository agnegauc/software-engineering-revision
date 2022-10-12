import express from "express";
import cors from "cors";
import { dateRouter } from "./routes/date/date.router";
import { greetingRouter } from "./routes/greeting/greeting.router";
import { userRouter } from "./routes/user.router";
import { numberRouter } from "./routes/number/number.router";

const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/date", dateRouter);
app.use("/number", numberRouter);
app.use("/greeting", greetingRouter);

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}.`);
});

export default app;
