const { houseService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  res.send(await houseService.load())
})

router.post('/', async (req, res) => {
  const house = await houseService.insert(req.body)
  res.send(house)
})


module.exports = router
