import { Request, Response, NextFunction } from "express"

export const signinMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  let errors: string[] = []

  const { email, password } = req.body

  if (!email) errors.push('Email is required')
  if (!password) errors.push('Password is required')

  if (errors.length) {
      res.status(400).send({
          "message": "Invalid request",
          "errors": errors
      })
      return
  }

  next()
}

export const registerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    let errors: string[] = []

    const { name, email, password } = req.body
    if (!name) {
        errors.push('Name is required')
    } else {
        if (name.length < 2) errors.push('Name must be at least 2 characters')
        if (name.length > 50) errors.push('Name must be less than 50 characters')
        if (!name.match(/^[a-zA-Z ]+$/)) errors.push('Name must be alphabetic')
    }
    if (!email) {
        errors.push('Email is required')
    } else {
        if (!email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) errors.push('Email is invalid')
    }
    if (!password) {
        errors.push('Password is required')
    } else {
        if (password.length < 6) errors.push('Password must be at least 6 characters')
        if (password.length > 30) errors.push('Password must be less than 30 characters')
    }

    if (errors.length) {
        res.status(400).send({
            "message": "Invalid request",
            "errors": errors
        })
        return
    }
    next()
}