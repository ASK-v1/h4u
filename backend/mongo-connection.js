const { connect } = require('mongoose')

const connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb+srv://ahmet:1231993@cluster0.2wa3x.mongodb.net'

connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })