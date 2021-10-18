<script>
export default {
  name: 'Features',
  data () {
    return {
      title: 'Chicago Ave',
      location: 'Chicago, IL 2021',
      price: '1,600',
      rooms: 3,
      area: 115,
      offered_since: '11.11.2021',
      type: 'House',
      energy: 'B',
      balcony: 'Present',
      garden: 'Not present',
      garage: 'Present'
    }
  }
}
</script>

<template>
  <div class="features">
    <div class="features_header">
      <div class="features_header_1">
        <h1>{{ title }}</h1>
        <p>{{ location }}</p>
      </div>
      <div class="features_header_2">
        <div class="header_2_area">
          <img src="../assets/icons/area.png" width="25">
          <h4>{{ area }} m²</h4>
        </div>
        <div class="header_2_rooms">
          <img src="../assets/icons/bed.png" width="25">
          <h4>{{ rooms }} rooms</h4>
        </div>
      </div>
      <div class="features_header_3">
        <h2>${{ price }} per month</h2>
      </div>
    </div>
    <div class="feature_items">
      <h2>Features</h2>
      <div class="features_price">
        <p>Rental price</p>
        <h4>${{ price }} per month</h4>
      </div>
      <div class="features_since">
        <p>Offered since</p>
        <h4>{{ offered_since }}</h4>
      </div>
      <div class="features_area">
        <p>Living area</p>
        <h4>{{ area }} m²</h4>
      </div>
      <div class="features_type">
        <p>Type of house</p>
        <h4>{{ type }}</h4>
      </div>
      <div class="features_rooms">
        <p>Number of rooms</p>
        <h4>{{ rooms }}</h4>
      </div>
      <div class="features_balcony">
        <p>Balcony</p>
        <h4>{{ balcony }}</h4>
      </div>
      <div class="features_garden">
        <p>Garden</p>
        <h4>{{ garden }}</h4>
      </div>
      <div class="features_garage">
        <p>Garage</p>
        <h4>{{ garage }}</h4>
      </div>
      <div class="features_energy">
        <p>Energy rating</p>
        <h4>{{ energy }}</h4>
      </div>
    </div>
  </div>
</template>

<style>
.features {
  display: flex;
  flex-direction: column;
}

.features .feature_items {
  padding: 50px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.25);
}

.features .feature_items p {
  margin-right: 100px;
}

.features h2 {
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  font-size: 20px;
}

.features p {
  color: #999999;
}

.features .features_header {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.features .features_header h4 {
  font-weight: normal;
}

.features .feature_items h4 {
  font-weight: normal;
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
