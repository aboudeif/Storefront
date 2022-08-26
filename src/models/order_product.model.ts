import client from "../database";

export interface OrderProduct {
  id?: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
}

export const getOrderProductById = async (id: number): Promise<OrderProduct> => {
  try {
    const queryText = `SELECT * FROM order_products WHERE id = $1`;
    const data = await client.query(queryText, [id]);
    return data.rows[0];
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export const getAllOrderProducts = async (): Promise<OrderProduct[]> => {
  try {
    const queryText = `SELECT * FROM order_products`;
    const data = await client.query(queryText);
    return data.rows;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export const createOrderProduct = async (
  order_product: OrderProduct
): Promise<OrderProduct> => {
  try {
    const { order_id, product_id, quantity, price } = order_product;
    const queryText = `INSERT INTO order_products (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *`;
    const data = await client.query(queryText, [order_id, product_id, quantity, price]);
    return data.rows[0];
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export const updateOrderProduct = async (
  order_product: OrderProduct
): Promise<OrderProduct> => {
  try {
    const { order_id, product_id, quantity, price, id } = order_product;
    const queryText = `UPDATE order_products SET order_id = $1, product_id = $2, quantity = $3, price = $4 WHERE id = $5 RETURNING *`;
    const data = await client.query(queryText, [order_id, product_id, quantity, price, id]);
    return data.rows[0];
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export const deleteOrderProduct = async (id: number): Promise<OrderProduct> => {
  try {
    const queryText = `DELETE FROM order_products WHERE id = $1 RETURNING *`;
    const data = await client.query(queryText, [id]);
    return data.rows[0];
  } catch (error) {
    throw new Error(`${error}`);
  }
}

// use join to get user product orders
export const getUserOrderProducts = async (
  user_id: number
): Promise<OrderProduct[]> => {
  try {
    const queryText = `SELECT * FROM order_products WHERE order_id IN (SELECT id FROM orders WHERE user_id = $1)`;
    const data = await client.query(queryText, [user_id]);
    return data.rows;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
