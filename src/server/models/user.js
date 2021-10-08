const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2 },
  password: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, minlength: 2 },
  savedHouse: []
})


module.exports = mongoose.model('User', UserSchema)
