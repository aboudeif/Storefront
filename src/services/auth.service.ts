import { getAllUsers, getUserById } from './../models/user.model'
import { User, createUser, getUserByEmail } from '../models/user.model'
import { AuthData, TokenPayload, UserCredentials } from '../models/auth.model'
import authConfig from '../auth'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// register new user
export const registerService = async (user: User): Promise<User> => {
  try {
    const hashedPassword = bcrypt.hashSync(user.password + authConfig.paper, authConfig.rounds)
    user.password = hashedPassword
    const data = await createUser(user)
    return data
  } catch (error) {
    throw new Error(error as string)
  }
}

// login user
export const loginService = async (credentials: UserCredentials): Promise<AuthData> => {
  try {
    const user = await getUserByEmail(credentials.email)
    if (!user) throw new Error('User not found')

    // compare password hash
    const isPasswordMatch = await bcrypt.compare(credentials.password + authConfig.paper, user.password as string)
    if (!isPasswordMatch) throw new Error('Invalid email or password')

    // generate token
    const token = generateToken(user)

    const authData: AuthData = {
      user: {
        firstname: user.firstname as string,
        lastname: user.lastname as string,
        email: user.email as string
      },
      token
    }

    return authData
  } catch (error) {
    throw new Error(error as string)
  }
}

// get user by id
export const getUserByIdService = async (id: number): Promise<User> => {
  try {
    const user = await getUserById(id)
    if (!user) throw new Error('User not found')
    return user
  } catch (error) {
    throw new Error(error as string)
  }
}

// get all users
export const getAllUsersService = async (): Promise<User[]> => {
  try {
    const users = await getAllUsers()
    return users
  } catch (error) {
    throw new Error(error as string)
  }
}

// generate token
const generateToken = (user: User): string => {
  try {
    const payload: TokenPayload = { email: user.email, firstname: user.firstname, lastname: user.lastname }
    return jwt.sign(payload, authConfig.jwtSecret)
  } catch (error) {
    throw new Error(error as string)
  }
}

// verify token
export const verifyToken = async (token: string): Promise<TokenPayload> => {
  try {
    const payload = jwt.verify(token, authConfig.jwtSecret) as TokenPayload
    return payload
  } catch (error) {
    throw new Error(error as string)
  }
}
