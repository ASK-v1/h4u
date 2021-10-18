<script>
export default {
  name: 'HouseCards',
  data () {
    return {
      imgsrc: ['https://images.unsplash.com/photo-1601056645918-329b756e54fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2067&q=80', 'https://images.unsplash.com/photo-1601056645918-329b756e54fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2067&q=80', 'https://images.unsplash.com/photo-1601056645918-329b756e54fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2067&q=80', 'https://images.unsplash.com/photo-1601056645918-329b756e54fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2067&q=80', 'https://images.unsplash.com/photo-1601056645918-329b756e54fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2067&q=80', 'https://images.unsplash.com/photo-1601056645918-329b756e54fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2067&q=80', 'https://images.unsplash.com/photo-1601056645918-329b756e54fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2067&q=80', 'https://images.unsplash.com/photo-1601056645918-329b756e54fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2067&q=80', 'https://images.unsplash.com/photo-1601056645918-329b756e54fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2067&q=80', 'https://images.unsplash.com/photo-1601056645918-329b756e54fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2067&q=80'],
      title: 'Chicago Ave',
      location: 'Chicago, IL 2021',
      price: '1600',
      rooms: '3',
      area: '115'
    }
  }
}
</script>

<template>
<div class="main_card">
  <div v-for='img in imgsrc' :key='img._id' class="house_cards">
    <div class="house_cards_image">
      <router-link to="/house"><img :src="img"/></router-link>
    </div>
    <div class="house_cards_all">
      <div class="house_cards_title_location">
        <div class="house_cards_title">
          <h2>{{ title }}</h2>
        </div>
        <div class="house_cards_location">
          <p>{{ location }}</p>
        </div>
      </div>
      <div class="house_cards_items">
        <div class="house_cards_area">
          <img src="../assets/icons/area.png" width="25">
          <h3>{{ area }} m²</h3>
        </div>
        <div class="house_cards_rooms">
          <img src="../assets/icons/bed.png" width="25">
          <h3>{{ rooms }} rooms</h3>
        </div>
      </div>
      <div class="house_cards_price">
        <h2>${{ price }} per month</h2>
      </div>
    </div>
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
</style>
