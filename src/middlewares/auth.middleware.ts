import { getUserByEmail } from '../models/user.model'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { TokenPayload } from '../models/auth.model'
import authConfig from '../auth'

export const signinMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const errors: string[] = []
  const { email, password } = req.body

  if (!email) errors.push('Email is required')
  if (!password) errors.push('Password is required')

  if (errors.length) {
    res.status(400).send({
      message: 'Invalid request',
      errors: errors
    })
    return
  }

  next()
}

export const registerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const errors: string[] = []
  const { firstname, lastname, email, password } = req.body
  if (!firstname || !lastname) {
    errors.push('Name is required')
  } else {
    if (firstname.length < 2 || lastname.length < 2) errors.push('Name must be at least 2 characters')
    if (firstname.length > 25 || lastname.length > 25) errors.push('Name must be less than 50 characters')
    if (!firstname.match(/^[a-zA-Z ]+$/) || !lastname.match(/^[a-zA-Z ]+$/)) errors.push('Name must be alphabetic')
  }
  if (!email) {
    errors.push('Email is required')
  } else {
    if (!email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
      errors.push('Email is invalid')
  }
  if (!password) {
    errors.push('Password is required')
  } else {
    if (password.length < 6) errors.push('Password must be at least 6 characters')
    if (password.length > 32) errors.push('Password must be less than 30 characters')
  }

  if (errors.length) {
    res.status(400).send({
      message: 'Invalid request',
      errors: errors
    })
    return
  }
  next()
}

export const verifyTokenMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.headers.authorization as string
    if (!token) throw new Error('Token not found')
    const payload: TokenPayload = jwt.verify(token.split(' ')[1], authConfig.jwtSecret) as TokenPayload
    if (!payload) throw new Error('Invalid token')
    const user = await getUserByEmail(payload.email)
    if (!user) throw new Error('Unauthorized')
    res.locals.user = user
    next()
  } catch (error) {
    res.status(401).send({
      errors: error
    })
  }
}
