<script>
export default {

}
</script>

<template>
<div class="content">
  <div class="content_1">
    <img src="../assets/popular.png" width="100">
    <h2>Popular locations</h2>
    <ul class="cities">
      <li>New York City</li>
      <li>Chicago</li>
      <li>Boston</li>
      <li>Austin</li>
      <li>San Francisco</li>
      <li>Los Angeles</li>
      <li>Seattle</li>
      <li>Washington</li>
    </ul>
  </div>
  <div class="content_2">
    <div class="signin">
      <img src="../assets/rent.jpg">
      <router-link to="/login" class="signin_button">Sing in</router-link>
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
  font-size: 13px;
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}
li:hover {
  background-size: 100% 3px;
  color: inherit;
}

.signin {
  display: flex;
  margin-top: 5%;
  margin-bottom: 5%;
  align-items: center;
  justify-content: center;
}

.signin img{
  border-radius: 10px;
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
  padding: 14px 42px;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}
.signin .signin_button:hover {
  background-color: #77ffff;
}
</style>
