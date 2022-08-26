import { Request, Response } from 'express'
import {
  getOrderProductByIdService,
  getAllOrderProductsService,
  createOrderProductService,
  updateOrderProductService,
  deleteOrderProductService,
  getUserOrderProductsService
} from '../services/order_product.service'
import { getProductPriceService } from '../services/product.service'

// get orderProduct by id
export const getOrderProductByIdHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const orderProduct = await getOrderProductByIdService(+id)
    res.send({
      message: 'OrderProduct retrieved successfully',
      orderProduct
    })
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      message: message
    })
  }
}

// index all orderProducts
export const getAllOrderProductsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderProducts = await getAllOrderProductsService()
    res.send({
      message: 'All orderProducts retrieved successfully',
      orderProducts
    })
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      message: message
    })
  }
}

// create orderProduct
export const createOrderProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { order_id, product_id } = req.body
    const orderProduct = await createOrderProductService({ order_id, product_id })
    res.send({
      message: 'OrderProduct created successfully',
      orderProduct
    })
  } catch (error) {
    res.status(400).send(`Couldent creating orderProduct, ${error}`)
  }
}

// update orderProduct
export const updateOrderProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { order_id, product_id, quantity } = req.body
    const price = await getProductPriceService(product_id)
    const orderProduct = await updateOrderProductService({ order_id, product_id, quantity, price })
    res.send({
      message: 'OrderProduct updated successfully',
      orderProduct
    })
  } catch (error) {
    res.status(400).send(`Couldent updating orderProduct, ${error}`)
  }
}

// delete orderProduct
export const deleteOrderProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const orderProduct = await deleteOrderProductService(+id)
    res.send({
      message: 'OrderProduct deleted successfully',
      orderProduct
    })
  } catch (error) {
    res.status(400).send(`Couldent deleting orderProduct, ${error}`)
  }
}

// get user orderProducts
export const getUserOrderProductsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const orderProducts = await getUserOrderProductsService(+id)
    res.send({
      message: 'User orderProducts retrieved successfully',
      orderProducts
    })
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      message: message
    })
  }
}
