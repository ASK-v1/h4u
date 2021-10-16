<script>
import Nav from '../components/Nav.vue'
import HouseCard from '../components/HouseCard.vue'
import Links from '../components/SocialLinks.vue'

export default {
  name: 'House',
  components: { Nav, Links, HouseCard }
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
    <div class="house_links">
      <Links />
    </div>
  </div>
</template>

<style>

.house_housecard {
  display: flex;
  flex-direction: row;
  margin-top: 1%;
  margin-bottom: 43%;
}
</style>
