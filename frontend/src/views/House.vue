<script>
import Nav from '../components/Nav.vue'
import HouseCard from '../components/HouseCard.vue'
import Links from '../components/SocialLinks.vue'
import Features from '../components/Features.vue'
import Contact from '../components/Contact.vue'

export default {
  name: 'House',
  components: { Nav, Links, HouseCard, Features, Contact }
}
</script>

<template>
  <div class="house">
    <div class="house_nav">
      <Nav />
    </div>
    <div class="house_housecard">
      <HouseCard />
    </div>
    <div class="house_features">
      <Features />
      <Contact />
    </div>
    <div class="house_links">
      <Links />
    </div>
  </div>
</template>

<style>

.house_housecard {
  display: flex;
  justify-content: center;
  margin-top: 1%;
  margin-bottom: 1%;
}
.house_features {
  display: flex;
  flex-direction: row;
  margin-bottom: 10%;
  justify-content: space-evenly;
}
</style>
