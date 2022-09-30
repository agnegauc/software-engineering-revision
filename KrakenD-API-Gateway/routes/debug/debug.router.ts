import express from "express";

const router = express.Router();

router.route("*").post((_, res) => {
  res.send("Hello!");
});

export { router as debugRouter };
