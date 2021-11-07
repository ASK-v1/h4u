var express = require('express')
var router = express.Router()
const { House } = require('../models/house')
const { User } = require('../models/user')

router.get('/', async (req, res) => {
  res.send(await House.find())
})

router.post('/', async (req, res) => {
  const house = await House.create(req.body)
  House.
  res.send(house)
})

router.get('/:cityName', async (req, res) => {
  const city = await House.find({ title: req.params.cityName })
  if (!city) return res.status(404)
  res.send(city)
})

router.get('/house/:houseId', async (req, res) => {
  const house = await House.findById(req.params.houseId)
  if (!house) return res.status(404)
  res.send(house)
})

router.put('/house/:houseId', async (req, res) => {
  const { userId, houseId } = req.body

  const house = await House.findById(houseId)
  const update = await User.updateOne({ _id: userId }, { $push: { savedHouse: house } }) 
  if (!update) return res.status(404)
  res.send(update)
})

router.get('/filterRoom/:room/:cityName', async (req, res) => {
  const { room, cityName } = req.params

  if (room === 'no') {
    const filter = await House.find({ title: cityName })
    if (!filter) return res.status(404)
    res.send(filter)
  }
  const filter = await House.find({ title: cityName, rooms: room })
  if (!filter) return res.status(404)
  res.send(filter)
})

router.get('/filterPrice/:price/:cityName', async (req, res) => {
  const { price, cityName } = req.params

  if (price === 'no') res.send(await House.find({ title: cityName }))
  if (price === '500') res.send(await House.find({ title: cityName, price: { $gt : price, $lt : 1000 } }))
  if (price === '1000') res.send(await House.find({ title: cityName, price: { $gt : price, $lt : 1500 } }))
  if (price === '1500') res.send(await House.find({ title: cityName, price: { $gt : price, $lt : 2000 } }))
  if (price === '2000') res.send(await House.find({ title: cityName, price: { $gt : price, $lt : 3000 } }))
  if (price === '3000') res.send(await House.find({ title: cityName, price: { $gt : price, $lt : 4000 } }))
  if (price === '4000') res.send(await House.find({ title: cityName, price: { $gt : price, $lt : 5000 } }))
  else return res.json().status(404)
})

router.get('/filterArea/:area/:cityName', async (req, res) => {
  const { area, cityName } = req.params

  if (area === 'no') {
    const filter = await House.find({ title: cityName })
    if (!filter) return res.status(404)
    res.send(filter)
  }
  const filter = await House.find({ title: cityName, area: { $gte: area } })
  if (!filter) return res.status(404)
  res.send(filter)
})

router.get('/filterType/:type/:cityName', async (req, res) => {
  const { type, cityName } = req.params

  if (type === 'no') {
    const filter = await House.find({ title: cityName })
    if (!filter) return res.status(404)
    res.send(filter)
  }
  console.log(type)
  const filter = await House.find({ title: cityName, type: type })
  if (!filter) return res.status(404)
  res.send(filter)
})


module.exports = router
