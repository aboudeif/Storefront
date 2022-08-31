
import express from 'express'
import {
  getOrderProductByIdHandler,
  getAllOrderProductsHandler,
  createOrderProductHandler,
  updateOrderProductHandler,
  deleteOrderProductHandler,
  getUserOrderProductsHandler
} from '../handlers/order_product.handler'
import { verifyTokenMiddleware, verifyProductOrderOwner, verifyAdminMiddleware } from '../middlewares/auth.middleware'

const orderProductRouter = express.Router()

// get orderProduct by id
orderProductRouter.get('/:id', verifyTokenMiddleware, verifyProductOrderOwner, getOrderProductByIdHandler)
// index all orderProducts
orderProductRouter.get('/', verifyTokenMiddleware, verifyAdminMiddleware, getAllOrderProductsHandler)
// create orderProduct
orderProductRouter.post('/', verifyTokenMiddleware, createOrderProductHandler)
// update orderProduct
orderProductRouter.put('/:id', verifyTokenMiddleware, verifyProductOrderOwner, updateOrderProductHandler)
// delete orderProduct
orderProductRouter.delete('/:id', verifyTokenMiddleware, verifyProductOrderOwner, deleteOrderProductHandler)
// get orders by user id
orderProductRouter.get('/user/:id', verifyTokenMiddleware, verifyProductOrderOwner, getUserOrderProductsHandler)

export default orderProductRouter