import client from '../database'

export interface Order {
  id?: number
  user_id: number
  product_id: number
  quantity: number
  total_price?: number
  is_completed?: boolean
}

export const getOrderById = async (id: number): Promise<Order> => {
  const queryText = `SELECT * FROM orders WHERE id = $1`
  const data = await client.query(queryText, [id])

  return data.rows[0]
}

export const getAllOrders = async (): Promise<Order[]> => {
  const queryText = `SELECT * FROM orders`
  const data = await client.query(queryText)

  return data.rows
}

export const createOrder = async (order: Order): Promise<Order> => {
  const { user_id, product_id, quantity, total_price, is_completed } = order
  const queryText = `INSERT INTO orders (user_id, product_id, quantity, total_price, is_completed) VALUES ($1, $2, $3, $4, $5) RETURNING *`
  const data = await client.query(queryText, [user_id, product_id, quantity, total_price, is_completed])

  return data.rows[0]
}

export const updateOrder = async (order: Order): Promise<Order> => {
  const { user_id, product_id, quantity, total_price, is_completed, id } = order
  const queryText = `UPDATE orders SET user_id = $1, product_id = $2, quantity = $3, total_price = $4, is_completed = $5 WHERE id = $6 RETURNING *`
  const data = await client.query(queryText, [user_id, product_id, quantity, total_price, is_completed, id])

  return data.rows[0]
}

export const deleteOrder = async (id: number): Promise<Order> => {
  const queryText = `DELETE FROM orders WHERE id = $1 RETURNING *`
  const data = await client.query(queryText, [id])

  return data.rows[0]
}

export const getOrdersByUserId = async (user_id: number): Promise<Order[]> => {
  const queryText = `SELECT * FROM orders WHERE user_id = $1`
  const data = await client.query(queryText, [user_id])

  return data.rows
}
