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
.houses_filters_sort {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.16);
}

.houses_housecards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 33%;
}
</style>
