<script>
export default {
  name: 'Filters'
}
</script>

<template>
  <div class="filters">
    <div class="filters_bedrooms">
      <label for="bedrooms">Bedrooms</label>
      <select class="bedroom_min">
          <option value="min">No min</option>
          <option value="studio">Studio</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
      </select>
      <select class="bedroom_max">
          <option value="max">No max</option>
          <option value="studio">Studio</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
      </select>
    </div>
    <div class="filters_price">
      <label for="price">Price range</label>
      <select class="price_min">
          <option value="min">No min</option>
          <option value="500">$500</option>
          <option value="750">$750</option>
          <option value="1000">$1000</option>
          <option value="1250">$1250</option>
          <option value="1500">$1500</option>
          <option value="1750">$1750</option>
          <option value="2000">$2000</option>
          <option value="2500">$2500</option>
          <option value="3000">$3000</option>
          <option value="3500">$3500</option>
          <option value="3500">$3500</option>
          <option value="4000">$4000</option>
          <option value="4500">$4500</option>
          <option value="5000">$5000</option>
      </select>
      <select class="price_max">
          <option value="max">No max</option>
          <option value="500">$500</option>
          <option value="750">$750</option>
          <option value="1000">$1000</option>
          <option value="1250">$1250</option>
          <option value="1500">$1500</option>
          <option value="1750">$1750</option>
          <option value="2000">$2000</option>
          <option value="2500">$2500</option>
          <option value="3000">$3000</option>
          <option value="3500">$3500</option>
          <option value="3500">$3500</option>
          <option value="4000">$4000</option>
          <option value="4500">$4500</option>
          <option value="5000">$5000</option>
      </select>
    </div>
    <div class="filters_area">
      <label for="area">Floor area</label>
      <select class="floor_area">
          <option value="no">No preference</option>
          <option value="50">50+ m2</option>
          <option value="75">75+ m2</option>
          <option value="100">100+ m2</option>
          <option value="125">125+ m2</option>
          <option value="150">150+ m2</option>
          <option value="200">200+ m2</option>
      </select>
    </div>
    <div class="filters_type">
      <label for="type">Property type</label>
      <select class="property_type">
          <option value="all">Show all</option>
          <option value="houses">Houses</option>
          <option value="flats">Flats</option>
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
  font-weight: bolder;
}

.filters select {
  padding: 8px 40px;
  color: dimgray;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}
.filters select:hover {
  color: black;
}

.filters_bedrooms {
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
