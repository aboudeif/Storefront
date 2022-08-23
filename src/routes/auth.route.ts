import express from 'express'
import { signinHanlder, registerHandler, getUserByIdHandler, getAllUsersHandler } from '../handlers/auth.handler'
import { signinMiddleware, registerMiddleware, verifyTokenMiddleware, verifyAdminMiddleware } from '../middlewares/auth.middleware'

const authRouter = express.Router()

authRouter.post('/login', signinMiddleware, signinHanlder)
authRouter.post('/register', registerMiddleware, registerHandler)
authRouter.get('/user/:id', verifyTokenMiddleware, verifyAdminMiddleware, getUserByIdHandler)
authRouter.get('/user', verifyTokenMiddleware, verifyAdminMiddleware, getAllUsersHandler)

export default authRouter
