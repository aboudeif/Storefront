import express from 'express'
import {
  getProductByIdHandler,
  getAllProductsHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler
} from '../handlers/product.handler'
import { verifyTokenMiddleware, verifyAdminMiddleware } from '../middlewares/auth.middleware'

const productRouter = express.Router()

// get product by id
productRouter.get('/:id', getProductByIdHandler)
// get all products
productRouter.get('/', getAllProductsHandler)
// create product
productRouter.post('/', verifyTokenMiddleware, verifyAdminMiddleware, createProductHandler)
// update product
productRouter.put('/:id', verifyTokenMiddleware, verifyAdminMiddleware, updateProductHandler)
// delete product
productRouter.delete('/:id', verifyTokenMiddleware, verifyAdminMiddleware, deleteProductHandler)

export default productRouter
