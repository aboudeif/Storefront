
import express from 'express';
import { getAllOrdersHandler, getOrderByIdHandler, createOrderHandler, updateOrderHandler, deleteOrderHandler, getOrdersByUserIdHandler  } from '../handlers/order.handler';
import { verifyTokenMiddleware } from "../middlewares/auth.middleware";

const orderRouter = express.Router();

orderRouter.get('/', getAllOrdersHandler);
orderRouter.get('/:id', getOrderByIdHandler);
orderRouter.post('/',verifyTokenMiddleware, createOrderHandler);
orderRouter.put('/:id', updateOrderHandler);
orderRouter.delete('/:id', deleteOrderHandler);
orderRouter.get('/user/:id', getOrdersByUserIdHandler);

export default orderRouter;