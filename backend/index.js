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


app.use('/users', usersRouter)
app.use('/houses', housesRouter)
app.use('/', indexRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`started listening on ${port}`)
})


module.exports = app
