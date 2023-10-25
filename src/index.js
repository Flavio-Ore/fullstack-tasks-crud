//importing your own modules you must add the extension
import dotenv from 'dotenv'
import { app, appSetup } from './app.js'
import { connectDB } from './db.js'
;(async () => {
  dotenv.config()

  try {
    await connectDB()

    appSetup()
    app.listen(process.env.BACKEND_PORT)

    console.log(
      '>>> SERVER IS RUNNING 🏃‍♀️🏃‍♂️💨💨 <<<\n',
      `👉http://localchost:${process.env.BACKEND_PORT}👈\n`
    )
  } catch (error) {
    console.error('>>> ERROR from index.js: ', error)
  }
})()
