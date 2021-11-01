var express = require('express')
var router = express.Router()
const { House } = require('../models/house')

router.get('/', async (req, res) => {
  res.send(await House.find())
})

router.post('/', async (req, res) => {
  const house = await House.create(req.body)
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

module.exports = router
