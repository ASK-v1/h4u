<script>
export default {
  name: 'Filters'
}
</script>

<template>
  <div class="filters">
    <div class="filters_rooms">
      <label for="rooms">Number of rooms</label>
      <select class="room">
        <option value="no">No preference</option>
        <option value="1">1 room</option>
        <option value="2">2 or more</option>
        <option value="3">3 or more</option>
        <option value="4">4 or more</option>
        <option value="5">5 or more</option>
        <option value="6">6 or more</option>
        <option value="7">7 or more</option>
        <option value="8">8 or more</option>
        <option value="9">9 or more</option>
      </select>
      </div>
    <div class="filters_price">
      <label for="price">Price range</label>
      <select class="price_min_max">
        <option value="no">No preference</option>
        <option value="500">$500 to $750</option>
        <option value="750">$750 to $1000</option>
        <option value="1000">$1000 to $1250</option>
        <option value="1250">$1250 to 1500</option>
        <option value="1500">$1500 to $1750</option>
        <option value="1750">$1750 to $2000</option>
        <option value="2000">$2000 to $2500</option>
        <option value="2500">$2500 to $3000</option>
        <option value="3000">$3000 to $3500</option>
        <option value="3500">$3500 to $4000</option>
        <option value="4000">$4000 to $4500</option>
        <option value="4500">$4500 to $5000</option>
      </select>
    </div>
    <div class="filters_area">
      <label for="area">Floor area</label>
      <select class="floor_area">
        <option value="no">No preference</option>
        <option value="50">50 m² or more</option>
        <option value="75">75 m² or more</option>
        <option value="100">100 m² or more</option>
        <option value="125">150 m² or more</option>
        <option value="150">200 m² or more</option>
        <option value="200">250 m² or more</option>
      </select>
    </div>
    <div class="filters_type">
      <label for="type">Property type</label>
      <select class="property_type">
        <option value="all">Show all</option>
        <option value="house">House</option>
        <option value="Apartment">Apartment</option>
      </select>
    </div>
  </div>
</template>

<style>
.filters {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.filters label {
  color: #262636;
  font-size: 15px;
  font-weight: bold;
}

.filters select {
  color: dimgray;
  border-radius: 15px;
}

.filters_rooms select {
  padding: 10px 30px;
}
.filters_price select {
  padding: 10px 30px;
}
.filters_area select {
  padding: 10px 30px;
}
.filters_type select {
  padding: 10px 30px;
}
.filters select:hover {
  color: black;
}

.filters_rooms {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 5px;
}

.filters_price {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 5px;
}

.filters_type{
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 5px;
}

.filters_area{
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 5px;
}
</style>
