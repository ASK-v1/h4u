<script>
import Nav from '../components/Nav.vue'
import Search from '../components/Search.vue'
import Links from '../components/SocialLinks.vue'
import Content from '../components/Content.vue'

export default {
  name: 'Home',
  components: { Nav, Search, Links, Content }
}
</script>

<template>
  <div class="home">
    <div class="home_nav">
      <Nav />
    </div>
    <div class="home_search">
      <Search />
    </div>
    <div class="home_content">
      <Content />
    </div>
    <div class="home_links">
      <Links />
    </div>
  </div>
</template>

<style>
.home_search {
  background-image: url("../assets/home.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 150px;
}
</style>
