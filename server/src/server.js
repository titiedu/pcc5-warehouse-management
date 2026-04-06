require('dotenv').config()
const express = require('express')
const indexRouter = require('./routers/index')

// Create an Express application
const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/', indexRouter);

(async () => {
  try {
    // Connect to the database
    const connectDB = require('./configs/db.connect')
    await connectDB()
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  } catch (error) {
    console.error('Failed to start the server:', error.message)
    process.exit(1) // Exit process with failure
  }
})()