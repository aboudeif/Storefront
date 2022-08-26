import client from '../database'

export interface User {
  id?: number
  firstname: string
  lastname: string
  email: string
  password?: string
  role?: string
}

// show user
export const getUserById = async (id: number): Promise<User> => {
  try{
  const queryText = `SELECT * FROM users WHERE id = $1`
  const data = await client.query(queryText, [id])
  return data.rows[0]
} catch (error) {
  throw new Error(`${error}`)
}
}

// index all users
export const getAllUsers = async (): Promise<User[]> => {
  try{
  const queryText = `SELECT * FROM users`
  const data = await client.query(queryText)
  return data.rows
} catch (error) {
  throw new Error(`${error}`)
}
}

// show user using email
export const getUserByEmail = async (email: string): Promise<User> => {
  try{
  const queryText = `SELECT * FROM users WHERE email = $1`
  const data = await client.query(queryText, [email])
  return data.rows[0]
} catch (error) {
  throw new Error(`${error}`)
}
}

// create user
export const createUser = async (user: User): Promise<User> => {
  try {
  const { firstname, lastname, email, password } = user
  const queryText = `INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *`
  const data = await client.query(queryText, [firstname, lastname, email, password])
  return data.rows[0]
} catch (error) {
  throw new Error(`${error}`)
}
}

// update user role to admin
export const promoteToAdmin = async (user: User): Promise<User> => {
  try{
  const { id } = user
  const queryText = `UPDATE users SET role = 'admin' WHERE id = $1 RETURNING *`
  const data = await client.query(queryText, [id])
  return data.rows[0]
} catch (error) {
  throw new Error(`${error}`)
}
}

// delete user
export const deleteUser = async (id: number): Promise<User> => {
  try{
  const queryText = `DELETE FROM users WHERE id = $1 RETURNING *`
  const data = await client.query(queryText, [id])
  return data.rows[0]
} catch (error) {
  throw new Error(`${error}`)
}
}
