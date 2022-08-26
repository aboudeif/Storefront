import client from '../database'

export interface Order {
  id?: number
  user_id: number
  product_id: number
  total_price?: number
  status?: string
}

// show order
export const getOrderById = async (id: number): Promise<Order> => {
  try{
  const queryText = `SELECT * FROM orders WHERE id = $1`
  const data = await client.query(queryText, [id])
  return data.rows[0]
} catch (error) {
  throw new Error(`${error}`)
}
}

// index all orders
export const getAllOrders = async (): Promise<Order[]> => {
  try{
  const queryText = `SELECT * FROM orders`
  const data = await client.query(queryText)
  return data.rows
} catch (error) {
  throw new Error(`${error}`)
}
}

// create order
export const createOrder = async (order: Order): Promise<Order> => {
  try {
  const { user_id, product_id, total_price } = order
  const queryText = `INSERT INTO orders (user_id, product_id, total_price) VALUES ($1, $2, $3) RETURNING *`
  const data = await client.query(queryText, [user_id, product_id, total_price])
  return data.rows[0]
} catch (error) {
  throw new Error(`${error}`)
}
}

// update order
export const updateOrder = async (order: Order): Promise<Order> => {
  try{
  const { user_id, product_id, total_price, status, id } = order
  const queryText = `UPDATE orders SET user_id = $1, product_id = $2 total_price = $3, status = $4 WHERE id = $5 RETURNING *`
  const data = await client.query(queryText, [user_id, product_id, total_price, status, id])
  return data.rows[0]
} catch (error) {
  throw new Error(`${error}`)
}
}

// delete order
export const deleteOrder = async (id: number): Promise<Order> => {
  try{
  const queryText = `DELETE FROM orders WHERE id = $1 RETURNING *`
  const data = await client.query(queryText, [id])
  return data.rows[0]
} catch (error) {
  throw new Error(`${error}`)
}
}

// index user orders
export const getOrdersByUserId = async (user_id: number): Promise<Order[]> => {
  try{
  const queryText = `SELECT * FROM orders WHERE user_id = $1`
  const data = await client.query(queryText, [user_id])
  return data.rows
} catch (error) {
  throw new Error(`${error}`)
}
}
