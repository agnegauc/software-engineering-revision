import express from "express";

const router = express.Router();

router.route("/").get((_, res) => {
  const randomNumber = (Math.random() * 1_000) | 0;

  res.send({ randomNumber, favoriteNumber: 7 });
});

export { router as numberRouter };
