import express from 'express'
import {
  getProductByIdHandler,
  getAllProductsHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler
} from '../handlers/product.handler'

const productRouter = express.Router()

productRouter.get('/:id', getProductByIdHandler)
productRouter.get('/', getAllProductsHandler)
productRouter.post('/', createProductHandler)
productRouter.put('/:id', updateProductHandler)
productRouter.delete('/:id', deleteProductHandler)

export default productRouter
