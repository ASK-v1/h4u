class BaseService {
  
  constructor (model) {
    this.model = model
  }

  async save (objects) {
    return await this.model.insertMany(objects)
  }

  async load () {
    return await this.model.find()
  }

  async insert (object) {
    return await this.model.create(object)
  }

  async removeBy (property, value) {
    return await this.model.deleteOne({ [property]: value })
  }

  async find (id) {
    return await this.model.findById(id)
  }

  async query (obj) {
    return await this.model.find(obj)
  }
}


module.exports = BaseService
