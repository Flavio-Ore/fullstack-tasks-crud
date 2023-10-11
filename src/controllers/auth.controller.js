import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'
import User from '../models/user.model.js'

export const register = async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password)
    return res.status(400).json({ message: 'Please fill all fields' })

  try {
    const salt = await bcrypt.genSalt(5)
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = new User({ username, email, password: passwordHash })
    const userSaved = await newUser.save()
    const token = await createAccessToken({ id: userSaved._id })

    res.cookie('token', token)

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message || 'Something went wrong' })
  }
}
export const login = (req, res) => {}
