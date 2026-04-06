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
app.use('/', indexRouter)

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
