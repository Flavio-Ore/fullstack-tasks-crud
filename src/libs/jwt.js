import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '../config.js'

export const createAccessToken = payload =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET_KEY, {}, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
