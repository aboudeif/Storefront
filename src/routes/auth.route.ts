import express from 'express'
import { signinHanlder, registerHandler, getUserByIdHandler, getAllUsersHandler } from '../handlers/auth.handler'
import {
  signinMiddleware,
  registerMiddleware,
  verifyTokenMiddleware,
  verifyAdminMiddleware
} from '../middlewares/auth.middleware'

const authRouter = express.Router()

// signin
authRouter.post('/login', signinMiddleware, signinHanlder)
// register
authRouter.post('/register', registerMiddleware, registerHandler)
// get user by id
authRouter.get('/user/:id', verifyTokenMiddleware, verifyAdminMiddleware, getUserByIdHandler)
// get all users
authRouter.get('/user', verifyTokenMiddleware, verifyAdminMiddleware, getAllUsersHandler)

export default authRouter
