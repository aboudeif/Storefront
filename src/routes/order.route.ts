import express from 'express'
import {
  getAllOrdersHandler,
  getOrderByIdHandler,
  createOrderHandler,
  updateOrderHandler,
  deleteOrderHandler,
  getOrdersByUserIdHandler
} from '../handlers/order.handler'
import { verifyTokenMiddleware, verifyOrderOwner, verifyAdminMiddleware } from '../middlewares/auth.middleware'

const orderRouter = express.Router()

// get all orders
orderRouter.get('/', verifyTokenMiddleware, verifyAdminMiddleware, getAllOrdersHandler)
// get order by id
orderRouter.get('/:id', verifyTokenMiddleware, getOrderByIdHandler)
// create order
orderRouter.post('/', verifyTokenMiddleware, createOrderHandler)
// update order
orderRouter.put('/:id', verifyTokenMiddleware, verifyOrderOwner, updateOrderHandler)
// delete order
orderRouter.delete('/:id', verifyTokenMiddleware, verifyOrderOwner, deleteOrderHandler)
// get orders by user id
orderRouter.get('/user/:id', verifyTokenMiddleware, verifyOrderOwner, getOrdersByUserIdHandler)

export default orderRouter
