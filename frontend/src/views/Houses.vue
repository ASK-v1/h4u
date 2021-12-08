<script>
import Nav from '../components/Nav.vue'
import Filters from '../components/Filters.vue'
import HouseCards from '../components/HouseCards.vue'
import Links from '../components/SocialLinks.vue'
import Pagination from '../components/Pagination.vue'
import Results from '../components/Results.vue'

export default {
  name: 'Houses',
  components: { Nav, Filters, Links, HouseCards, Pagination, Results },
  data () {
    return {
      filterHouses: [],
      pageHouses: Number,
      total: Number
    }
  },
  updated () {
    window.scrollTo(0, 0)
  }
}
</script>
<template>
  <div class="houses">
    <div class="houses_nav">
      <Nav />
    </div>
    <div class="houses_filters">
      <Filters @sendFilterData="filterHouses = $event" @sendPageData="pageHouses = $event" @sendTotal="total = $event"/>
    </div>
    <div class="houses_housecards">
      <HouseCards :houses = "filterHouses" />
    </div>
    <div class="houses_results">
      <Results :total = "total" />
    </div>
    <div class="houses_pagination">
      <Pagination :pages = "pageHouses"/>
    </div>
    <div class="houses_links">
      <Links />
    </div>
  </div>
</template>

<style>
.houses_filters {
  padding: 20px;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.16);
}

.houses_housecards {
  display: flex;
  justify-content: center;
}

.houses_links {
  margin-top: 300px;
}
</style>
