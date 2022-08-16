

import client from '../database'

export interface User{
    id?: number
    name: string
    email: string
    password?: string
}

export const getUserById = async (id: number): Promise<User> => {
    const queryText = `SELECT * FROM users WHERE id = $1`
    const data = await client.query(queryText, [id])
    
    return data.rows[0]
}

export const getUserByEmail = async (email: string): Promise<User> => {
    const queryText = `SELECT * FROM users WHERE email = $1`
    const data = await client.query(queryText, [email])

    return data.rows[0]
}

export const getAllUsers = async (): Promise<User[]> => {
    const queryText = `SELECT * FROM users`
    const data = await client.query(queryText)
    return data.rows
}

export const createUser = async (user: User): Promise<User> => {
    const { name, email, password } = user;
    const queryText = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`
    const data = await client.query(queryText, [name, email, password])

    return data.rows[0]
}