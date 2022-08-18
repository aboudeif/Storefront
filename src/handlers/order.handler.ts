
import { Request, Response } from "express";
import { getOrderByIdService, getAllOrdersService, createOrderService, updateOrderService, deleteOrderService, getOrdersByUserIdService } from "../services/order.service";

export const getOrderByIdHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const order = await getOrderByIdService(+id);
    res.send({
      "message": "Order retrieved successfully",
      order
    });
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      "message": message
    });
  }
}

export const getAllOrdersHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders = await getAllOrdersService();
    res.send({
      "message": "All orders retrieved successfully",
      orders
    });
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      "message": message
    });
  }
}

export const createOrderHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { product_id, quantity } = req.body;
    const user_id = res.locals.user as number;
    const order = await createOrderService({ user_id, product_id, quantity });
    res.send({
      "message": "Order created successfully",
      order
    });
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      "message": message
    });
  }
}

export const updateOrderHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as unknown as number;
    const { user_id, product_id, quantity } = req.body;
    const order = await updateOrderService({ id, user_id, product_id, quantity });
    res.send({
      "message": "Order updated successfully",
      order
    });
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      "message": message
    });
  }
}

export const deleteOrderHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const order = await deleteOrderService(+id);
    res.send({
      "message": "Order deleted successfully",
      order
    });
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      "message": message
    });
  }
}

export const getOrdersByUserIdHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const orders = await getOrdersByUserIdService(+id);
    res.send({
      "message": "Orders retrieved successfully",
      orders
    });
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      "message": message
    });
  }
}
