import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'
import User from '../models/user.model.js'

export const register = async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password)
    return res.status(400).json({ errors: ['Please fill all fields'] })

  try {
    const [usernameFound, emailFound] = await Promise.all([
      User.findOne({ username }),
      User.findOne({ email })
    ])
    if (usernameFound && emailFound)
      return res
        .status(400)
        .json({ errors: ['Email already exists', 'Username already exists'] })

    if (usernameFound)
      return res.status(400).json({ errors: ['Username already exists'] })
    if (emailFound)
      return res.status(400).json({ errors: ['Email already exists'] })

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
export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const userFound = await User.findOne({ email })
    if (!userFound) return res.status(400).json({ errors: 'User not found' })

    const isMatch = await bcrypt.compare(password, userFound.password)
    if (!isMatch) return res.status(400).json({ errors: 'Invalid credentials' })

    const token = await createAccessToken({ id: userFound._id })

    res.cookie('token', token)

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message || 'Something went wrong' })
  }
}

export const logout = async (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0)
  })

  return res.sendStatus(200)
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)

  if (!userFound) return res.status(400).json({ errors: 'User not found' })

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt
  })
}
