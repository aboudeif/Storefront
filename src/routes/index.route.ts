import express from 'express';

import authRouter from './auth.route';
import productRouter from './product.route';
import orderRouter from './order.route';

const router = express.Router();

router.use('/', authRouter);
router.use('/product', productRouter);
router.use('/order', orderRouter);

router.get('/', (req, res) => {
  res.send('Hello World!')
})

export default router;