import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const MONGO_URL = `mongodb+srv://oregonzgo:${process.env.MONGO_PASSWORD}@cluster0.wrofogn.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`

mongoose.Promise = global.Promise
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL)

    console.log('>>> DB IS CONNECTED 🚀 <<<')
  } catch (error) {
    console.log(error)
  } finally {
  }
}
