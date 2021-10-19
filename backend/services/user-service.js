const BaseService = require('./base-service')
const HouseService = require('./house-service')
const User = require('../models/user')


class UserService extends BaseService {

  async save(houseId, userId) {
    const user = await this.find(userId)
    const house = await HouseService.find(houseId)

    const saving = await this.insert({ house })
    user.savedHouse.push(saving)
    await user.save()

    return saving
  }
}
module.exports = new UserService(User)
