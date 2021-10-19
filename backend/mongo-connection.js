const mongoose = require('mongoose')

const uri = 'mongodb+srv://ahmet:1231993@cluster0.2wa3x.mongodb.net'

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('we are connected to mongodb!')
})
