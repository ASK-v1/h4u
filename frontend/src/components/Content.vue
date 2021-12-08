<script>
export default {
  name: 'Content'
}
</script>

<template>
<div class="content">
  <div class="content_1">
    <img src="../assets/popular.png" width="100">
    <h2>Popular locations</h2>
    <ul class="cities">
      <a href="/houses/chicago/1"><li>Chicago</li></a>
      <a href="/houses/austin/1"><li>Austin</li></a>
      <a href="/houses/washington/1"><li>Washington</li></a>
      <a href="/houses/seattle/1"><li>Seattle</li></a>
      <a href="/houses/sanFrancisco/1"><li>San Francisco</li></a>
      <a href="/houses/boston/1"><li>Boston</li></a>
      <a href="/houses/newYorkCity/1"><li>New York City</li></a>
      <a href="/houses/losAngeles/1"><li>Los Angeles</li></a>
    </ul>
  </div>
  <div v-if="!(this.$store.getters.isLoggedIn)" class="content_2">
    <div class="signin">
      <img src="../assets/rent.jpg">
      <router-link to="/register" class="signin_button">Register</router-link>
    </div>
  </div>
</div>
</template>

<style>
.content {
  margin-top: 3%;
  margin-bottom: 3%;
  text-align: center;
}

.content .cities a{
  text-decoration: none;
}
.content .cities a:hover{
  color: black;
}
.content_1 {
  margin-left: 15%;
  margin-right: 15%;
}

.content_2 {
  margin-top: 3%;
  text-align: center;
}

.cities {
  margin-top: 2%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
}

.cities li {
  background-image: linear-gradient(#00ffff, #ffffff);
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0% 5px;
  transition: background-size 500ms ease-in-out;
  list-style-type: none;
  cursor: pointer;
  background-color: #ffffff;
  cursor: pointer;
  color: #000000;
  font-family: Arial;
  font-size: 12px;
  font-weight: bold;
  padding: 14px;
  text-decoration: none;
  border: 1px solid rgb(122, 122, 122);
}
li:hover {
  background-size: 100% 3px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.01) 0px 2px 15px;
  color: inherit;
}

.signin {
  display: flex;
  flex-direction: row;
  border: 1px solid rgb(122, 122, 122);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.01) 0px 2px 15px;
  border-radius: 15px;
  margin-top: 5%;
  margin-bottom: 5%;
  align-items: center;
  justify-content: center;
  margin-left: 27%;
  margin-right: 27%;
}

.signin img{
  width: 500px;
  height: 300px;
}

.signin .signin_button {
  background-color: #00ffff;
  cursor: pointer;
  color: #000000;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 20px 60px;
  text-decoration: none;
  border-radius: 30px;
}

.signin .signin_button:hover {
  background-color: #77ffff;
}
@media (max-width: 1400px) {
  .signin {
    margin-right: 10%;
    margin-left: 10%;
  }
}
</style>
