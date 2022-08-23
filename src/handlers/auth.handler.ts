import { Request, Response } from 'express'
import { getAllUsersService, getUserByIdService, loginService, registerService } from '../services/auth.service'

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

export const getUserByIdHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const user = await getUserByIdService(+id)
    if (!user) {
      throw new Error('User not found')
    }
    res.send({
      message: 'User retrieved successfully',
      user
    })
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      message: message
    })
  }
}

export const getAllUsersHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsersService()
    res.send({
      message: 'All users retrieved successfully',
      users
    })
  } catch (error: unknown) {
    const { message } = error as { message: string }
    res.status(400).send({
      message: message
    })
  }
}