
import { 
  OrderProduct,
  getOrderProductById,
  getAllOrderProducts,
  createOrderProduct,
  updateOrderProduct,
  deleteOrderProduct,
  getUserOrderProducts
} from "../models/order_product.model";

// get orderProduct by id
export const getOrderProductByIdService = async (id: number): Promise<OrderProduct> => {
  try {
    const orderProduct = await getOrderProductById(id)
    return orderProduct
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// index all orderProducts
export const getAllOrderProductsService = async (): Promise<OrderProduct[]> => {
  try {
    const orderProducts = await getAllOrderProducts()
    return orderProducts
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// create orderProduct
export const createOrderProductService = async (orderProduct: OrderProduct): Promise<OrderProduct> => {
  try {
    const newOrderProduct = await createOrderProduct(orderProduct)
    return newOrderProduct
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// update orderProduct
export const updateOrderProductService = async (orderProduct: OrderProduct): Promise<OrderProduct> => {
  try {
    const updatedOrderProduct = await updateOrderProduct(orderProduct)
    return updatedOrderProduct
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// delete orderProduct
export const deleteOrderProductService = async (id: number): Promise<OrderProduct> => {
  try {
    const deletedOrderProduct = await deleteOrderProduct(id)
    return deletedOrderProduct
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// get orderProducts by user id
export const getUserOrderProductsService = async (id: number): Promise<OrderProduct[]> => {
  try {
    const orderProducts = await getUserOrderProducts(id)
    return orderProducts
  } catch (error) {
    throw new Error(`${error}`)
  }
}

