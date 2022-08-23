
import client from '../database'

export interface User {
  id?: number
  firstname: string
  lastname: string
  email: string
  password?: string
  role?: string
}

export const getUserById = async (id
: number): Promise<User> => {
  const queryText = `SELECT * FROM users WHERE id = $1`
  const data = await client.query(queryText, [id])

  return data.rows[0]
}

export const getAllUsers = async (): Promise<User[]> => {
  const queryText = `SELECT * FROM users`
  const data = await client.query(queryText)

  return data.rows
}

export const getUserByEmail = async (email: string): Promise<User> => {
  const queryText = `SELECT * FROM users WHERE email = $1`
  const data = await client.query(queryText, [email])

  return data.rows[0]
}

export const createUser = async (user: User): Promise<User> => {
  const { firstname, lastname, email, password } = user
  const queryText = `INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *`
  const data = await client.query(queryText, [firstname, lastname, email, password])

  return data.rows[0]
}

export const promoteToAdmin = async (user: User): Promise<User> => {
  const { id } = user
  const queryText = `UPDATE users SET role = 'admin' WHERE id = $1 RETURNING *`
  const data = await client.query(queryText, [id])

  return data.rows[0]
}

export const deleteUser = async (user: User): Promise<User> => {
  const { id } = user
  const queryText = `DELETE FROM users WHERE id = $1 RETURNING *`
  const data = await client.query(queryText, [id])

  return data.rows[0]
}