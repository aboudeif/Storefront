import express from 'express'

import authRouter from './auth.route'
import productRouter from './product.route'
import orderRouter from './order.route'
import orderProductRouter from './order_product.router'

const router = express.Router()

// user routes
router.use('/', authRouter)
// product routes
router.use('/product', productRouter)
// order routes
router.use('/order', orderRouter)
// orderProduct routes
router.use('/orderProduct', orderProductRouter)
// default route
router.get('/', (req, res) => {
  res.send('Welcome to the API')
})

export default router
