import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/index.route'

const app: express.Application = express()
dotenv.config()
const { SERVER_PORT } = process.env

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(SERVER_PORT, function () {
  console.log(`starting app on: ${SERVER_PORT}`)
})
