import client from '../database'

export interface Order {
  id?: number
  user_id: number
  product_id: number
  quantity: number
  total_price?: number
  status?: string
}

// show order
export const getOrderById = async (id: number): Promise<Order> => {
  const queryText = `SELECT * FROM orders WHERE id = $1`
  const data = await client.query(queryText, [id])

  return data.rows[0]
}

// index all orders
export const getAllOrders = async (): Promise<Order[]> => {
  const queryText = `SELECT * FROM orders`
  const data = await client.query(queryText)

  return data.rows
}

// create order
export const createOrder = async (order: Order): Promise<Order> => {
  const { user_id, product_id, quantity, total_price } = order
  const queryText = `INSERT INTO orders (user_id, product_id, quantity, total_price) VALUES ($1, $2, $3, $4) RETURNING *`
  const data = await client.query(queryText, [user_id, product_id, quantity, total_price])

  return data.rows[0]
}

// update order
export const updateOrder = async (order: Order): Promise<Order> => {
  const { user_id, product_id, quantity, total_price, status, id } = order
  const queryText = `UPDATE orders SET user_id = $1, product_id = $2, quantity = $3, total_price = $4, status = $5 WHERE id = $6 RETURNING *`
  const data = await client.query(queryText, [user_id, product_id, quantity, total_price, status, id])

  return data.rows[0]
}

// delete order
export const deleteOrder = async (id: number): Promise<Order> => {
  const queryText = `DELETE FROM orders WHERE id = $1 RETURNING *`
  const data = await client.query(queryText, [id])

  return data.rows[0]
}

// index user orders
export const getOrdersByUserId = async (user_id: number): Promise<Order[]> => {
  const queryText = `SELECT * FROM orders WHERE user_id = $1`
  const data = await client.query(queryText, [user_id])

  return data.rows
}
