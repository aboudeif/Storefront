import express from 'express'
import {
  getAllOrdersHandler,
  getOrderByIdHandler,
  createOrderHandler,
  updateOrderHandler,
  deleteOrderHandler,
  getOrdersByUserIdHandler
} from '../handlers/order.handler'
import { verifyTokenMiddleware, verifyUserAuthorizationMiddleware, verifyAdminOrSelfMiddleware, verifyAdminMiddleware } from '../middlewares/auth.middleware'

const orderRouter = express.Router()

orderRouter.get('/', verifyTokenMiddleware, verifyAdminMiddleware, getAllOrdersHandler)
orderRouter.get('/:id', verifyTokenMiddleware, getOrderByIdHandler)
orderRouter.post('/', verifyTokenMiddleware, createOrderHandler)
orderRouter.put('/:id', verifyTokenMiddleware, verifyUserAuthorizationMiddleware, updateOrderHandler)
orderRouter.delete('/:id', verifyTokenMiddleware, verifyUserAuthorizationMiddleware, deleteOrderHandler)
orderRouter.get('/user/:id', verifyTokenMiddleware, verifyAdminOrSelfMiddleware, getOrdersByUserIdHandler)

export default orderRouter
