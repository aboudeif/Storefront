
import { 
  OrderProduct,
  getOrderProductById,
  getAllOrderProducts,
  createOrderProduct,
  updateOrderProduct,
  deleteOrderProduct,
  getOrderProductsByUserId
} from "../models/order_product.model";

// get order_product by id
export const getOrder_productByIdService = async (id: number): Promise<Order_product> => {
  try {
    const order_product = await getOrder_productById(id)
    return order_product
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// index all order_products
export const getAllOrder_productsService = async (): Promise<Order_product[]> => {
  try {
    const order_products = await getAllOrder_products()
    return order_products
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// create order_product
export const createOrder_productService = async (order_product: Order_product): Promise<Order_product> => {
  try {
    const newOrder_product = await createOrder_product(order_product)
    return newOrder_product
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// update order_product
export const updateOrder_productService = async (order_product: Order_product): Promise<Order_product> => {
  try {
    const updatedOrder_product = await updateOrder_product(order_product)
    return updatedOrder_product
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// delete order_product
export const deleteOrder_productService = async (id: number): Promise<Order_product> => {
  try {
    const deletedOrder_product = await deleteOrder_product(id)
    return deletedOrder_product
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// get order_products by user id
export const getOrder_productsByUserIdService = async (id: number): Promise<Order_product[]> => {
  try {
    const order_products = await getOrder_productsByUserId(id)
    return order_products
  } catch (error) {
    throw new Error(`${error}`)
  }
}

