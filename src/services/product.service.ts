
import {
  Product,
  getProductById,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductPrice,
} from '../models/product.model'

// get product by id
export const getProductByIdService = async (id: number): Promise<Product> => {
  try {
    const product = await getProductById(id)
    return product
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// index all products
export const getAllProductsService = async (): Promise<Product[]> => {
  try {
    const products = await getAllProducts()
    return products
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// create product
export const createProductService = async (product: Product): Promise<Product> => {
  try {
    const newProduct = await createProduct(product)
    return newProduct
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// update product
export const updateProductService = async (product: Product): Promise<Product> => {
  try {
    const updatedProduct = await updateProduct(product)
    return updatedProduct
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// delete product
export const deleteProductService = async (id: number): Promise<Product> => {
  try {
    const deletedProduct = await deleteProduct(id)
    return deletedProduct
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// get product price
export const getProductPriceService = async (id: number): Promise<number> => {
  try {
    const product = await getProductPrice(id)
    return product
  } catch (error) {
    throw new Error(`${error}`)
  }
}