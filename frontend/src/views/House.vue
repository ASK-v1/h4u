<script>
import Nav from '../components/Nav.vue'
import HouseCard from '../components/HouseCard.vue'
import Links from '../components/SocialLinks.vue'
import Features from '../components/Features.vue'
import Contact from '../components/Contact.vue'

export default {
  name: 'House',
  components: { Nav, Links, HouseCard, Features, Contact },
  mounted () {
    window.scrollTo(0, 0)
  }
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
}
.house_features {
  display: flex;
  justify-content: space-evenly;
}
</style>
