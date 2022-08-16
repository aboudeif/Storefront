
import dotenv from 'dotenv'

export interface AuthConfiguration {
  rounds: number,
  paper: string,
  jwtSecret: string
  jwtExpiresIn: number
}

dotenv.config()

const authConfig: AuthConfiguration = {
    rounds: Number(process.env.BCRYPT_ROUNDS),
    paper: process.env.BCRYPT_PAPER as string,
    jwtSecret: process.env.JWT_SECRET as string,
    jwtExpiresIn: Number(process.env.JWT_EXPIRES_IN)
}

export default authConfig;