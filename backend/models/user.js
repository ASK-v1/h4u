const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  phone: Number,
  savedHouse: []
})

const User = model('User', userSchema)

module.exports = { User }