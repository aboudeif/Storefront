import { Product, getProductById, getAllProducts, createProduct, updateProduct, deleteProduct } from "../models/product.model";

export const getProductByIdService = async (id: number): Promise<Product> => {
  try{
    const product = await getProductById(id);
    return product;
  }
  catch(error){
    throw new Error(`Error getting product with id ${id}, ${error}`);
  }
}

export const getAllProductsService = async (): Promise<Product[]> => {
  try{
    const products = await getAllProducts();
    return products;
  }
  catch(error){
    throw new Error(`Error getting all products, ${error}`);
  }
}

export const createProductService = async (product: Product): Promise<Product> => {
  try{
    const newProduct = await createProduct(product);
    return newProduct;
  }
  catch(error){
    throw new Error(`Error creating product, ${error}`);
  }
}

export const updateProductService = async (product: Product): Promise<Product> => {
  try{
    const updatedProduct = await updateProduct(product);
    return updatedProduct;
  }
  catch(error){
    throw new Error(`Error updating product, ${error}`);
  }
}

export const deleteProductService = async (id: number): Promise<Product> => {
  try{
    const deletedProduct = await deleteProduct(id);
    return deletedProduct;
  }
  catch(error){
    throw new Error(`Error deleting product, ${error}`);
  }
}


