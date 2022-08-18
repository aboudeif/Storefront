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
  firstname: string
  lasttname: string
  email: string
}

export interface TokenPayload {
  email: string
  firstname: string
  lastname: string
  exp?: number
}
