import express from "express";

const router = express.Router();

router.route("*").post((req, res) => {
  res.send(`Hello ${req.body?.name ?? ""}`);
});

export { router as greetingRouter };
