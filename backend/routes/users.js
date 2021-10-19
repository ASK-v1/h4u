const { userService, houseService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  res.send(await userService.load())
})

router.post('/', async (req, res) => {
  const user = await userService.insert(req.body)
  res.send(user)
})

module.exports = router
