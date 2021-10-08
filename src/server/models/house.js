const mongoose = require('mongoose')

const HouseSchema = new mongoose.Schema({
  
  name: String,
  description: String,
  location: String,
  date: String,
  price: String,
  status: String,
  rooms: Number,
  bathRooms: Number,
  area: Number,
  typeOfHouse: String,
  Energy: String,
  agentName: String,
  agentPhone: Number,
  map: {},
  photos: {}
})


module.exports = mongoose.model('House', HouseSchema)
