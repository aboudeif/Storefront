import dotenv from 'dotenv'

export interface AuthConfiguration {
  rounds: number
  paper: string
  jwtSecret: string
}

dotenv.config()

const authConfig: AuthConfiguration = {
  rounds: Number(process.env.BCRYPT_ROUNDS),
  paper: process.env.BCRYPT_PAPER as string,
  jwtSecret: process.env.JWT_SECRET as string
}

export default authConfig
