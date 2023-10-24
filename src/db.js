import mongoose from 'mongoose'

mongoose.Promise = global.Promise
export const connectDB = async () => {
  try {
    const MONGO_URL = `mongodb+srv://oregonzgo:${process.env.MONGO_PASSWORD}@cluster0.wrofogn.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`
    console.log('>>> 💧 DB IS CONNECTING 🔨 ...')
    await mongoose.connect(MONGO_URL)
    console.log('... ✅ DB IS CONNECTED 🔥🚀 <<<')
  } catch (error) {
    console.log('... 📛 DB IS NOT CONNECTED ❗💥 <<<')
    console.log(error)
    return
  }
}
