const express = require('express')
const indexRouter = express()

indexRouter.use('/users', require('./user.router'))

module.exports = indexRouter