import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'
import {
  default as authRoutes,
  default as taskRoutes
} from './routes/auth.routes.js'

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api', authRoutes)
app.use('/api', taskRoutes)

export default app
