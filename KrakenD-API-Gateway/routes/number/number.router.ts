import express from "express";

const router = express.Router();

router.route("/").get((_, res) => {
  const randomNumber = (Math.random() * 1_000) | 0;

  res.send(`Your new favorite number: ${randomNumber}`);
});

export { router as numberRouter };
