import { Request, Response } from 'express'
import {
  getProductByIdService,
  getAllProductsService,
  createProductService,
  updateProductService,
  deleteProductService
} from '../services/product.service'

export const getProductByIdHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const product = await getProductByIdService(+id)
    res.send(product)
  } catch (error) {
    res.status(400).send(`Couldent getting product with id, ${error}`)
  }
}

export const getAllProductsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await getAllProductsService()
    res.send(products)
  } catch (error) {
    res.status(400).send(`Couldent getting all products, ${error}`)
  }
}

export const createProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, category } = req.body
    const product = await createProductService({ name, price, category })
    res.send(product)
  } catch (error) {
    res.status(400).send(`Couldent creating product, ${error}`)
  }
}

export const updateProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params as unknown as { id: number }
    const { name, price, category, is_available } = req.body
    const product = await updateProductService({ id, name, price, category, is_available })
    res.send(product)
  } catch (error) {
    res.status(400).send(`Couldent updating product, ${error}`)
  }
}

export const deleteProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const product = await deleteProductService(+id)
    res.send(product)
  } catch (error) {
    res.status(400).send(`Couldent deleting product, ${error}`)
  }
}
