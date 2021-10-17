<script>
export default {
  name: 'HouseCards',
  data () {
    return {
      imgsrc: ['https://images.unsplash.com/photo-1632234069603-05f656a064db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=901&q=80'],
      title: 'Chicago Ave',
      location: 'Chicago, IL 2021',
      price: '1200',
      rooms: '3',
      area: '115'
    }
  }
}

</script>

<template>
  <div class="house_cards">
    <div class="house_cards_image">
      <router-link to="/house"><img :src="imgsrc[0]"/></router-link>
    </div>
    <div class="house_cards_title">
      <h1>{{ title }}</h1>
    </div>
    <div class="house_cards_location">
      <p>{{ location }}</p>
    </div>
    <div class="house_cards_items">
      <div class="house_cards_price">
        <img src="../assets/icons/dollar.png" width="25">
        <h2>{{ price }}</h2>
      </div>
      <div class="house_cards_rooms">
        <img src="../assets/icons/bed.png" width="25">
        <h2>{{ rooms }} rooms</h2>
      </div>
      <div class="house_cards_area">
        <img src="../assets/icons/area.png" width="25">
        <h2>{{ area }} m²</h2>
      </div>
    </div>
  </div>
</template>

<style>
.house_cards {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
  text-align: center;
}

.house_cards_image img {
  width: 350px;
  height: 250px;
  border-radius: 5px 0 0 5px;
  margin-bottom: 3%;
}

.house_cards .house_cards_items {
  display: flex;
  flex-direction: row;
  padding: 20px 20px 0;
  justify-content: center;
}

.house_cards h1 {
  color: #262636;
  font-size: 25px;
}

.house_cards h2 {
  margin-bottom: 5px;
  font-size: 1rem;
  font-weight: 400;
  padding: 10px;
  margin-top: -12px;
}

.house_cards .house_cards_location  p {
  color: #818189;
  font-weight: bold;
  font-size: 1rem;
}
</style>
