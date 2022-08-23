import { Request, Response } from 'express'
import {
  getProductByIdService,
  getAllProductsService,
  createProductService,
  updateProductService,
  deleteProductService
} from '../services/product.service'

// get product by id
export const getProductByIdHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const product = await getProductByIdService(+id)
    res.send({
      message: 'Product retrieved successfully',
      product
    })
  } catch (error) {
    res.status(400).send(`Couldent getting product with id, ${error}`)
  }
}

// index all products
export const getAllProductsHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await getAllProductsService()
    res.send({
      message: 'All products retrieved successfully',
      products
    })
  } catch (error) {
    res.status(400).send(`Couldent getting all products, ${error}`)
  }
}

// create product
export const createProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, category } = req.body
    const product = await createProductService({ name, price, category })
    res.send({
      message: 'Product created successfully',
      product
    })
  } catch (error) {
    res.status(400).send(`Couldent creating product, ${error}`)
  }
}

// update product
export const updateProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params as unknown as { id: number }
    const { name, price, category, is_available } = req.body
    const product = await updateProductService({ id, name, price, category, is_available })
    res.send({
      message: 'Product updated successfully',
      product
    })
  } catch (error) {
    res.status(400).send(`Couldent updating product, ${error}`)
  }
}

// delete product
export const deleteProductHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const product = await deleteProductService(+id)
    res.send({
      message: 'Product deleted successfully',
      product
    })
  } catch (error) {
    res.status(400).send(`Couldent deleting product, ${error}`)
  }
}
