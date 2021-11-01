<script>
import Spinner from '../components/Spinner.vue'

import { mapActions } from 'vuex'

export default {
  name: 'HouseCards',
  components: { Spinner },
  data () {
    return {
      houses: [],
      spinner: true
    }
  },
  async mounted () {
    await this.getCitySearch()
    this.spinner = false
  },
  methods: {
    ...mapActions(['getSearch', 'getUrl']),
    async getCitySearch () {
      this.houses = await this.getSearch(this.$route.params.cityName)
    }
  }
}
</script>

<template>
<div class="main_card">
  <div v-if="spinner" class="spinner">
    <Spinner />
  </div>
  <div v-for='house in houses' :key='house.id' class="house_cards">
    <div class="house_cards_image">
      <router-link :to="`/houses/house/${house._id}`"><img :src="house.url[0]"/></router-link>
    </div>
    <div class="house_cards_all">
      <div class="house_cards_title_location">
        <div class="house_cards_title">
          <h2>{{ house.title.charAt(0).toUpperCase() + house.title.slice(1) }}</h2>
        </div>
        <div class="house_cards_location">
          <p>{{ house.location }}</p>
        </div>
      </div>
      <div class="house_cards_items">
        <div class="house_cards_area">
          <img src="../assets/icons/area.png" width="25">
          <h3>{{ house.area }} m²</h3>
        </div>
        <div class="house_cards_rooms">
          <img src="../assets/icons/bed.png" width="25">
          <h3>{{ house.rooms }} rooms</h3>
        </div>
      </div>
      <div class="house_cards_price">
        <h2>${{ house.price }} per month</h2>
      </div>
    </div>
  </div>
  <div v-if="!spinner" class="total">
    <h2>{{ houses.length }} homes for rent</h2>
  </div>
</div>
</template>

<style>
.house_cards {
  display: flex;
  flex-direction: row;
  border-bottom: 3px solid #dadada;
  gap: 15px;
  padding-right: 150px;
  margin-top: 3%;
}

.house_cards .house_cards_all {
  display: flex;
  flex-direction: column;
}

.house_cards .house_cards_title_location {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.house_cards_image img {
  width: 275px;
  height: 200px;
}

.house_cards .house_cards_items {
  display: flex;
  margin-top: 20px;
  gap: 20px;
}

.house_cards .house_cards_items .house_cards_rooms {
  display: flex;
  gap: 5px;
}

.house_cards .house_cards_items .house_cards_area {
  display: flex;
  gap: 5px;
}

.house_cards h2 {
  font-weight: 600;
  margin-top: 20px;
  font-size: 20px;
}

.house_cards h3 {
  display: flex;
  font-weight: normal;
  font-size: 15px;
  align-items: center;
}

.house_cards .house_cards_location  p {
  color: #999999;
  font-weight: bold;
  font-size: 1rem;
}
.space {
  margin-bottom: 25%;
}
.total {
  margin-top: 50px;
  text-align: center;
  color: #999999;
}
</style>
