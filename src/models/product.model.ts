import client from '../database'

export interface Product {
  id?: number
  name: string
  price: number
  category: string
  is_available?: boolean
}

// show product
export const getProductById = async (id: number): Promise<Product> => {
  const queryText = `SELECT * FROM products WHERE id = $1`
  const data = await client.query(queryText, [id])

  return data.rows[0]
}

// index all products
export const getAllProducts = async (): Promise<Product[]> => {
  const queryText = `SELECT * FROM products`
  const data = await client.query(queryText)

  return data.rows
}

// create product
export const createProduct = async (product: Product): Promise<Product> => {
  const { name, price, category } = product
  const queryText = `INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *`
  const data = await client.query(queryText, [name, price, category])

  return data.rows[0]
}

// update product
export const updateProduct = async (product: Product): Promise<Product> => {
  const { name, price, category, id } = product
  const queryText = `UPDATE products SET name = $1, price = $2, category = $3 WHERE id = $4 RETURNING *`
  const data = await client.query(queryText, [name, price, category, id])

  return data.rows[0]
}

// delete product
export const deleteProduct = async (id: number): Promise<Product> => {
  const queryText = `DELETE FROM products WHERE id = $1 RETURNING *`
  const data = await client.query(queryText, [id])

  return data.rows[0]
}
