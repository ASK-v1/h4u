var express = require('express')
var router = express.Router()
const { House } = require('../models/house')

router.get('/', async (req, res) => {
  res.send(await House.find())
})

module.exports = router
