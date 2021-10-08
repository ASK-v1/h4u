<script>
export default {

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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.logo img {
  width: 150px;
}
.login img{
  margin: 0 30px 0 0;
  width: 33px;
}
</style>
