import { User } from "./user.model"

export interface UserCredentials{
  email: string
  password: string
}

export interface AuthData{
  user: User
  token: string
}

interface AuthUser {
  name: string
  email: string
}

export interface TokenPayload {
  sub: string
  name: string
  iat?: number
  exp?: number
  iss?: string
}
