<script>
export default {
  name: 'Nav'
}
</script>

<template>
  <div class="nav">
    <router-link to="/" class="logo"><img src="../assets/logo.png"></router-link>
    <router-link to="/login" class="login"><img src="../assets/icons/user.png"></router-link>
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
</style>
