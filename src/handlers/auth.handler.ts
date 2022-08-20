import { Request, Response } from 'express'
import { loginService, registerService } from '../services/auth.service'

export const signinHanlder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body
    const user = await loginService({ email, password })
    res.send({
      message: 'User logged in successfully',
      user
    })
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      message: message
    })
  }
}

export const registerHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstname, lastname, email, password } = req.body
    const user = await registerService({ firstname, lastname, email, password })
    if (!user) {
      throw new Error('Error registering user, please try again')
    }
    res.send({
      message: 'User registered successfully',
      user
    })
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      message: message
    })
  }
}
