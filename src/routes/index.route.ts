import express from "express";

import authRouter from "./auth.route";
import productRouter from "./product.route";

const router = express.Router();

router.use("/", authRouter);
router.use("/product", productRouter);

router.get('/', (req, res) => {
  res.send('Hello World!')
})

export default router;