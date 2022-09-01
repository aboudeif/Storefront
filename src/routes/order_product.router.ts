
import express from 'express'
import {
  getOrderProductByIdHandler,
  getAllOrderProductsHandler,
  createOrderProductHandler,
  updateOrderProductHandler,
  deleteOrderProductHandler,
  getUserOrderProductsHandler
} from '../handlers/order_product.handler'
import { verifyTokenMiddleware, verifyOrderProductOwner, verifyAdminMiddleware } from '../middlewares/auth.middleware'

const orderProductRouter = express.Router()

// get orderProduct by id
orderProductRouter.get('/:id', verifyTokenMiddleware, verifyOrderProductOwner, getOrderProductByIdHandler)
// index all orderProducts
orderProductRouter.get('/', verifyTokenMiddleware, verifyAdminMiddleware, getAllOrderProductsHandler)
// create orderProduct
orderProductRouter.post('/', verifyTokenMiddleware, createOrderProductHandler)
// update orderProduct
orderProductRouter.put('/:id', verifyTokenMiddleware, verifyOrderProductOwner, updateOrderProductHandler)
// delete orderProduct
orderProductRouter.delete('/:id', verifyTokenMiddleware, verifyOrderProductOwner, deleteOrderProductHandler)
// get orders by user id
orderProductRouter.get('/user/:id', verifyTokenMiddleware, verifyOrderProductOwner, getUserOrderProductsHandler)

export default orderProductRouter