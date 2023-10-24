import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '../config.js'

export const authRequired = (req, res, next) => {
  const { token } = req.cookies

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err)
      return res.status(403).json({ message: 'Forbidden, invalid token' })
    req.user = decoded
    next()
  })
}
