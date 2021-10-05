<template>
  <div class="home">
    <router-link class="logo" to="/"><img class="logo" src="./assets/logo.png"></router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo {
  width: 150px;
}
</style>
