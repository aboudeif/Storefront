import { Order, getOrderById, getAllOrders, createOrder, updateOrder, deleteOrder, getOrdersByUserId } from "../models/order.model";
import { getProductPrice } from "../models/product.model";

export const getOrderByIdService = async (id: number): Promise<Order> => {
  try {
    const order = await getOrderById(id);
    return order;
  } catch(error) {
    throw new Error (`${error}`);
  }
}

export const getAllOrdersService = async (): Promise<Order[]> => {
  try {
    const orders = await getAllOrders();
    return orders;
  } catch(error) {
    throw new Error (`${error}`);
  }
}

export const createOrderService = async (order: Order): Promise<Order> => {
  try {
    const price = await getProductPrice(order.product_id);
    order.total_price = order.quantity * price;
    const newOrder = await createOrder(order);
    return newOrder;
  } catch(error) {
    throw new Error (`${error}`);
  }
}

export const updateOrderService = async (order: Order): Promise<Order> => {
  try {
    const updatedOrder = await updateOrder(order);
    return updatedOrder;
  } catch(error) {
    throw new Error (`${error}`);
  }
}

export const deleteOrderService = async (id: number): Promise<Order> => {
  try {
    const deletedOrder = await deleteOrder(id);
    return deletedOrder;
  } catch(error) {
    throw new Error (`${error}`);
  }
}

export const getOrdersByUserIdService = async (user_id: number): Promise<Order[]> => {
  try {
    const orders = await getOrdersByUserId(user_id);
    return orders;
  } catch(error) {
    throw new Error (`${error}`);
  }
}
