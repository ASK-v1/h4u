const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./mongo-connection')

const usersRouter = require('./routes/users')
const housesRouter = require('./routes/houses')
const indexRouter = require('./routes/index')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.set('view engine', 'pug')

app.use('/users', usersRouter)
app.use('/houses', housesRouter)
app.use('/', indexRouter)


module.exports = app
