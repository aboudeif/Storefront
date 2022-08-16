import express from "express";

import auth from "./auth.route";

const router = express.Router();

router.use("/", auth);

router.get('/', (req, res) => {
  res.send('Hello World!')
})

export default router;