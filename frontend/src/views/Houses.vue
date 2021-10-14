<script>
import Nav from '../components/Nav.vue'
import Filters from '../components/Filters.vue'
import Sort from '../components/Sort.vue'
import HouseCards from '../components/HouseCards.vue'
import Links from '../components/SocialLinks.vue'

export default {
  name: 'Houses',
  components: { Nav, Filters, Links, HouseCards, Sort }
}
</script>

<template>
  <div class="houses">
    <div class="houses_nav">
      <Nav />
    </div>
    <div class="houses_filters_sort">
      <Filters />
      <Sort />
    </div>
    <div class="houses_housecards">
      <HouseCards />
    </div>
    <div class="houses_links">
      <Links />
    </div>
  </div>
</template>

<style>

</style>
