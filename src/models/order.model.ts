import client from '../database'

export interface Order {
  id?: number
  user_id: number
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
  const { user_id } = order
  const queryText = `INSERT INTO orders (user_id) VALUES ($1) RETURNING *`
  const data = await client.query(queryText, [user_id])
  return data.rows[0]
} catch (error) {
  throw new Error(`${error}`)
}
}

// update order
export const updateOrder = async (order: Order): Promise<Order> => {
  try{
  const { user_id, status, id } = order
  const queryText = `UPDATE orders SET user_id = $1, status = $2 WHERE id = $3 RETURNING *`
  const data = await client.query(queryText, [user_id, status, id])
  return data.rows[0]
} catch (error) {
  throw new Error(`${error}`)
}
}

// delete order
export const deleteOrder = async (id: number): Promise<Order> => {
  try{
    const queryText = `DELETE FROM orders WHERE id = $1 RETURNING *`;
    const data = await client.query(queryText, [id]);
    return data.rows[0];
  } catch (error) {
    throw new Error(`${error}`);
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

// get order id if user id exist and has order status active
export const getOrderIfActive = async (user_id: number): Promise<Order> => {
  try{
  const queryText = `SELECT * FROM orders WHERE user_id = $1 AND status = 'active'`
  const data = await client.query(queryText, [user_id])
  return data.rows[0]
} catch (error) {
  throw new Error(`${error}`)
}
}