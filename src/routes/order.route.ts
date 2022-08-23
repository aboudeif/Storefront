import express from 'express'
import {
  getAllOrdersHandler,
  getOrderByIdHandler,
  createOrderHandler,
  updateOrderHandler,
  deleteOrderHandler,
  getOrdersByUserIdHandler
} from '../handlers/order.handler'
import {
  verifyTokenMiddleware,
  verifyUserAuthorizationMiddleware,
  verifyAdminOrSelfMiddleware,
  verifyAdminMiddleware
} from '../middlewares/auth.middleware'

const orderRouter = express.Router()

// get all orders
orderRouter.get('/', verifyTokenMiddleware, verifyAdminMiddleware, getAllOrdersHandler)
// get order by id
orderRouter.get('/:id', verifyTokenMiddleware, getOrderByIdHandler)
// create order
orderRouter.post('/', verifyTokenMiddleware, createOrderHandler)
// update order
orderRouter.put('/:id', verifyTokenMiddleware, verifyUserAuthorizationMiddleware, updateOrderHandler)
// delete order
orderRouter.delete('/:id', verifyTokenMiddleware, verifyUserAuthorizationMiddleware, deleteOrderHandler)
// get orders by user id
orderRouter.get('/user/:id', verifyTokenMiddleware, verifyAdminOrSelfMiddleware, getOrdersByUserIdHandler)

export default orderRouter
