import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mern-db')
    console.log('>>> DB IS CONNECTED')
  } catch (error) {
    console.log(error)
  }
}
