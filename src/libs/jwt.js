import jwt from 'jsonwebtoken'

export const createAccessToken = payload =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_SECRET_KEY, {}, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
