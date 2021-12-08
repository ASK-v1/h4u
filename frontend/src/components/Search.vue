<script>
export default {
  name: 'Search',
  data () {
    return {
      cityName: ''
    }
  }
}
</script>

<template>
<div class="search">
  <h1>Search properties to rent</h1>
  <p>The leading rental website in the USA</p>
  <input type="text" placeholder="Search city, neighbourhood, adress" v-model="cityName"/>
  <router-link v-if="cityName" :to="`/houses/${cityName}/1`" class="search_button">Search</router-link>
  <router-link v-else  to="/" class="search_button">Search</router-link>
</div>
</template>

<style>
.search {
  padding: 30px;
  border-radius: 10px;
  background-color: #262636;
  text-align: center;
  margin-right: 26%;
  margin-left: 26%;
  font-family: Arial;
}
.search input {
  width: 300px;
  height: 50px;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
}
.search h1 {
  color: #00ffff;
  font-size: 30px;
  margin-bottom: 20px;
}
.search p {
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 20px;
}
.search .search_button {
  background-color: #00ffff;
  border-radius: 5px;
  cursor: pointer;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  padding: 17px 23px;
  text-decoration: none;
  margin-left: 30px;
}
.search .search_button:hover {
  background-color: #77ffff;
}

@media (max-width: 1400px) {
  .search {
    margin-right: 10%;
    margin-left: 10%;
  }
}
</style>
