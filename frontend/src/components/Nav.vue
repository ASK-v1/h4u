<script>
export default {
  name: 'Nav'
}
</script>

<template>
  <div class="nav">
    <router-link to="/" class="logo"><img src="../assets/logo.png"></router-link>
    <div class="nav_account" v-if="this.$store.getters.isLoggedIn">
      <router-link  to="/account" class="login"><img src="../assets/icons/user.png"></router-link>
      <h3>{{ this.$store.getters.user.firstName }}</h3>
    </div>
    <div v-else class="nav_login">
      <router-link to="/login" class="login"><img src="../assets/icons/user.png"></router-link>
    </div>
  </div>
</template>

<style>
.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #262636;
}

.logo img {
  width: 150px;
}

.login img{
  width: 30px;
  margin-right: 30px;
}

.nav .nav_account {
  display: flex;
  flex-direction: row-reverse;
}

.nav .nav_account h3 {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  margin-right: 10px;
  font-size: 20px;
}
</style>
