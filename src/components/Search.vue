<script>
export default {

}
</script>

<template>
<div class="search">
  <h1>Search properties to rent</h1>
  <p>The leading rental website in the USA</p>
  <input type="text" placeholder="Search city, neighbourhood, adress" v-model="searchQuery" />
  <a href="#" class="search_button">Search</a>
</div>
</template>

<style>
.search {
  padding: 30px 60px;
  border-radius:  10px;
  background-color: #262636;
  text-align: center;
  margin-right: 26%;
  margin-left: 26%;
}
.search input {
  width: 300px;
  height: 50px;
  outline: none;
  font-size: 16px;
  font-family: Arial;
  border-radius: 5px;
}
.search h1 {
  color: #00ffff;
  font-size: 30px;
  font-family: Arial;
  margin-bottom: 20px;
}
.search p {
  color: #ffffff;
  font-size: 20px;
  font-family: Arial;
  margin-bottom: 20px;
}
.search .search_button {
  background-color: #00ffff;
  border-radius: 5px;
  cursor: pointer;
  color: #000000;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 17px 23px;
  text-decoration: none;
  margin-left: 30px;
}
.search .search_button:hover {
  background-color: #77ffff;
}
</style>
