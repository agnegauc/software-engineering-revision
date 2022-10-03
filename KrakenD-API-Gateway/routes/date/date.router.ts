import express from "express";

const router = express.Router();

router.route("/").get((_, res) => {
  const weekday = new Date().toLocaleString("lt-LT", { weekday: "long" });
  const formattedWeekday = `${weekday[0].toLocaleUpperCase()}${weekday.slice(
    1
  )}`;

  res.send({ formattedWeekday, weekday });
});

export { router as dateRouter };
