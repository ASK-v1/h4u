var express = require('express')
var router = express.Router()
const bcrypt = require('bcrypt')
const { User } = require('../models/user')
const { SECRET } = require('../key')
const jwt = require('jsonwebtoken')
const saltRounds = 10

router.post('/register', async (req, res) => {
  const { email, password, firstName, lastName, phone } = req.body
  const existingUser = await User.findOne({ email })
  if (existingUser) res.status(401).send()
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  const user = new User({ firstName, lastName, phone, email, password: hashedPassword })
  await user.save()
  res.json(user).status(201)
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const userData = await User.findOne({ email })
    const match = await bcrypt.compare(password, userData.password)
    if (match) {
      const token = jwt.sign({ email }, SECRET, { expiresIn: 86400 })
      res.json({ token, userData }) 
    }
    else res.status(401).send()
  } catch {
    res.status(401).send()
    }
})

router.get('/', async (req, res) => {
  res.send(await User.find())
})
module.exports = router
