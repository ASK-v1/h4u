<script>
import Spinner from '../components/Spinner.vue'

import { mapActions } from 'vuex'

export default {
  name: 'Filters',
  components: { Spinner },
  data () {
    return {
      filterHouses: [],
      filterRoom: [],
      filterPrice: [],
      filterArea: [],
      filterType: [],
      room: 'no',
      price: 'no',
      area: 'no',
      type: 'no',
      spinner: true
    }
  },
  methods: {
    ...mapActions(['getRoom', 'getPrice', 'getArea', 'getType']),
    intersection (room, price, area, type) {
      const i1 = room.filter(item1 => price.some(item2 => item1._id === item2._id))
      const i2 = area.filter(item3 => type.some(item4 => item3._id === item4._id))
      const i12 = i1.filter(i1 => i2.some(i2 => i1._id === i2._id))
      this.filterHouses = i12
    },
    async sendData () {
      const data = {
        cityName: this.$route.params.cityName,
        room: this.room,
        price: this.price,
        area: this.area,
        type: this.type
      }
      this.filterRoom = await this.getRoom(data)
      this.filterPrice = await this.getPrice(data)
      this.filterArea = await this.getArea(data)
      this.filterType = await this.getType(data)
      this.intersection(this.filterRoom, this.filterPrice, this.filterArea, this.filterType)
      this.$emit('sendFilterData', this.filterHouses)
    }
  },
  async mounted () {
    await this.sendData()
    this.spinner = false
  }
}
</script>

<template>
  <div class="filters">
    <div v-if="spinner" class="spinner">
      <Spinner />
    </div>
    <div class="filter">
      <div class="filters_rooms">
        <label for="rooms">Number of rooms</label>
        <select class="room" v-model="room">
          <option value="no">No preference</option>
          <option value="1">1 room</option>
          <option value="2">2 rooms</option>
          <option value="3">3 rooms</option>
          <option value="4">4 rooms</option>
          <option value="5">5 rooms</option>
          <option value="6">6 rooms</option>
          <option value="7">7 rooms</option>
          <option value="8">8 rooms</option>
          <option value="9">9 rooms</option>
        </select>
        </div>
      <div class="filters_price">
        <label for="price">Price range</label>
        <select class="price_min_max" v-model="price">
          <option value="no">No preference</option>
          <option value="500">$500 to $1000</option>
          <option value="1000">$1000 to $1500</option>
          <option value="1500">$1500 to 2000</option>
          <option value="2000">$2000 to $3000</option>
          <option value="3000">$3000 to $4000</option>
          <option value="[4000,5000]">$4000 to $5000</option>
        </select>
      </div>
      <div class="filters_area">
        <label for="area">Floor area</label>
        <select class="floor_area" v-model="area">
          <option value="no">No preference</option>
          <option value="50">50 m² or more</option>
          <option value="75">75 m² or more</option>
          <option value="100">100 m² or more</option>
          <option value="150">150 m² or more</option>
          <option value="200">200 m² or more</option>
          <option value="250">250 m² or more</option>
        </select>
      </div>
      <div class="filters_type">
        <label for="type">Property type</label>
        <select class="property_type" v-model="type">
          <option value="no">Show all</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
        </select>
      </div>
    </div>
    <button @click="sendData" class="filters_button">Filter</button>
  </div>
</template>

<style>
.filters {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}

.filters .filter {
  display: flex;
  gap: 20px;
}
.filters_button {
  width: 150px;
  height: 50px;
  margin-top: 20px;
  background-color: #262636;
  color: white;
  font-weight: bolder;
  font-size: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}
.filters_button:hover {
  background-color: #343446;
}
.filters label {

  color: #262636;
  font-size: 15px;
  font-weight: bold;
}

.filters select {
  color: dimgray;
  padding: 10px 30px;
}

.filters select:hover {
  color: black;
}

.filters_rooms {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
}

.filters_price {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
}

.filters_type{
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
}

.filters_area{
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
}
</style>
