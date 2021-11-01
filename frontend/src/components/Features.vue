<script>
import { mapActions } from 'vuex'

export default {
  name: 'Features',
  data () {
    return {
      house: {}
    }
  },
  async mounted () {
    this.house = await this.getHouse(this.$route.params.houseId)
  },
  methods: {
    ...mapActions(['getHouse'])
  }
}
</script>

<template>
  <div class="features">
    <div class="features_header">
      <div class="features_header_1">
        <h1>{{ house.title }}</h1>
        <p>{{ house.location }}</p>
      </div>
      <div class="features_header_2">
        <div class="header_2_area">
          <img src="../assets/icons/area.png" width="25">
          <h4>{{ house.area }} m²</h4>
        </div>
        <div class="header_2_rooms">
          <img src="../assets/icons/bed.png" width="25">
          <h4>{{ house.rooms }} rooms</h4>
        </div>
      </div>
      <div class="features_header_3">
        <h2>${{ house.price }} per month</h2>
      </div>
    </div>
    <div class="feature_items">
      <h2>Features</h2>
      <div class="features_price">
        <p>Rental price</p>
        <h4>${{ house.price }} per month</h4>
      </div>
      <div class="features_since">
        <p>Offered since</p>
        <h4>{{ house.date }}</h4>
      </div>
      <div class="features_area">
        <p>Living area</p>
        <h4>{{ house.area }} m²</h4>
      </div>
      <div class="features_type">
        <p>Type of house</p>
        <h4>{{ house.type }}</h4>
      </div>
      <div class="features_rooms">
        <p>Number of rooms</p>
        <h4>{{ house.rooms }}</h4>
      </div>
      <div class="features_balcony">
        <p>Balcony</p>
        <h4>{{ house.balcony }}</h4>
      </div>
      <div class="features_garden">
        <p>Garden</p>
        <h4>{{ house.garden }}</h4>
      </div>
      <div class="features_garage">
        <p>Garage</p>
        <h4>{{ house.garage }}</h4>
      </div>
      <div class="features_energy">
        <p>Energy rating</p>
        <h4>{{ house.energy }}</h4>
      </div>
    </div>
  </div>
</template>

<style>
.features {
  display: flex;
  flex-direction: column;
}

.features .feature_items p {
  margin-right: 150px;
  font-size: 20px;
}

.features h1 {
  text-transform: capitalize;
}

.features h2 {
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  font-size: 25px;
}

.features p {
  color: #999999;
  font-size: 20px;
}

.features .features_header {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 10%;
}

.features .features_header h4 {
  font-weight: normal;
  font-size: 18px;
}

.features .feature_items h4 {
  font-weight: normal;
  font-size: 20px;
}

.features .features_header .features_header_1 {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.features .features_header .features_header_2 {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.features .features_header .features_header_2 .header_2_area {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
}

.features .features_header .features_header_2 .header_2_rooms {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
}

.features .features_header .features_header_3 {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
}

.features_price {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dadada;
  justify-content:space-between;
  margin-bottom: 20px;
}

.features_since {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dadada;
  justify-content:space-between;
  margin-bottom: 20px;
}

.features_area {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dadada;
  justify-content:space-between;
  margin-bottom: 20px;
}

.features_type {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dadada;
  justify-content:space-between;
  margin-bottom: 20px;
}

.features_rooms {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dadada;
  justify-content:space-between;
  margin-bottom: 20px;
}

.features_balcony {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dadada;
  justify-content:space-between;
  margin-bottom: 20px;
}

.features_garden {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dadada;
  justify-content:space-between;
  margin-bottom: 20px;
}

.features_garage {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dadada;
  justify-content:space-between;
  margin-bottom: 20px;
}

.features_energy {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dadada;
  justify-content:space-between;
  margin-bottom: 20px;
}
</style>
