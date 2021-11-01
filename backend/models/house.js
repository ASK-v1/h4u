const { Schema, model } = require('mongoose')

const houseSchema = new Schema({
  url: [],
  title: String,
  location: String,
  price: Number,
  rooms: Number,
  area: Number,
  date: String,
  type: String,
  energy: String,
  balcony: String,
  garden: String,
  garage: String
})

const House = model('House', houseSchema)

module.exports = { House }