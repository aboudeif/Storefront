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

productRouter.get('/:id', getProductByIdHandler)
productRouter.get('/', getAllProductsHandler)
productRouter.post('/', verifyTokenMiddleware, verifyAdminMiddleware, createProductHandler)
productRouter.put('/:id', verifyTokenMiddleware, verifyAdminMiddleware, updateProductHandler)
productRouter.delete('/:id', verifyTokenMiddleware, verifyAdminMiddleware, deleteProductHandler)

export default productRouter
