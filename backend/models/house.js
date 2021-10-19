const mongoose = require('mongoose')

const HouseSchema = new mongoose.Schema({
  
  title: String,
  location: String,
  price: Number,
  rooms: Number,
  area: Number,
  date: Date,
  type: String,
  energy: String,
  balcony: String,
  garden: String,
  garage: String
})


module.exports = mongoose.model('House', HouseSchema)
