import express from 'express'
import { signinHanlder, registerHandler } from '../handlers/auth.handler'
import { signinMiddleware, registerMiddleware } from '../middlewares/auth.middleware'

const authRouter = express.Router()

authRouter.post('/login', signinMiddleware, signinHanlder)
authRouter.post('/register', registerMiddleware, registerHandler)

export default authRouter
