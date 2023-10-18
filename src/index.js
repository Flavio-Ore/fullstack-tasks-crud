//importing your own modules you must add the extension
import dotenv from 'dotenv'
import app from './app.js'
import { connectDB } from './db.js'
;(async () => {
  dotenv.config()

  await connectDB()

  app.listen(process.env.PORT)

  console.log(
    '>>> SERVER IS RUNNING 🏃‍♀️🏃‍♂️💨💨 <<<\n',
    `👉http://localchost:${process.env.PORT}👈\n`
  )
})()
