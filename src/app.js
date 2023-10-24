import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'

export const app = express()
export const appSetup = () => {
  // using middlewares
  app.use(
    cors({
      origin: `http://localhost:${process.env.FRONTEND_PORT}`,
      credentials: true
    })
  )
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(cookieParser())

  app.use('/api', authRoutes)
  app.use('/api', tasksRoutes)
}
