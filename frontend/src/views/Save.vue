<script>
import Nav from '../components/Nav.vue'
import SavedHouse from '../components/SavedHouse.vue'
import Links from '../components/SocialLinks.vue'

export default {
  name: 'Houses',
  components: { Nav, Links, SavedHouse },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
<template>
  <div class="houses">
    <div class="houses_nav">
      <Nav />
    </div>
    <div class="houses_save">
      <SavedHouse />
    </div>
    <div class="houses_links">
      <Links />
    </div>
  </div>
</template>

<style>
.houses_save {
  display: flex;
  justify-content: center;
}
</style>
