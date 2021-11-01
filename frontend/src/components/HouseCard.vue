<script>
import Spinner from '../components/Spinner.vue'

import { mapActions } from 'vuex'

export default {
  name: 'HouseCard',
  components: { Spinner },
  data () {
    return {
      num: 0,
      house: {},
      url: [],
      spinner: true
    }
  },
  async mounted () {
    this.house = await this.getHouse(this.$route.params.houseId)
    this.url = this.house.url
    this.spinner = false
  },
  methods: {
    ...mapActions(['getHouse']),
    nbutton () {
      ++this.num
    },
    pbutton () {
      --this.num
    }
  }
}
</script>

<template>
  <div class="house_card">
    <div v-if="spinner" class="spinner">
      <Spinner />
    </div>
    <div class="gallery_button">
      <button v-if="!(num === 0)" @click="pbutton" class="a_button">«</button>
      <button v-else class="na_button">«</button>
    </div>
    <div class="photo_1">
      <a v-if="(num === 0)" class="kucuk" :href="url[num]"><img :src="url[num]"></a>
      <a v-else class="buyuk" :href="url[num]"><img :src="url[num]"></a>
      <div class="photos_save">
        <div class="photos">
          <h4>{{ url.length }}</h4>
          <p>Photos</p>
        </div>
        <div class="save">
          <img src="../assets/icons/heart.png" width="35">
          <p>Save</p>
        </div>
      </div>
    </div>
    <div class="photo_2">
      <a v-if="num === 0" :href="url[num+1]"><img :src="url[num+1]"></a>
      <a v-if="num === 0" :href="url[num+2]"><img :src="url[num+2]"></a>
    </div>
    <div class="gallery_button">
      <button v-if="!(num === url.length - 1)" @click="nbutton" class="a_button">»</button>
      <button class="na_button" v-else>»</button>
    </div>
  </div>
</template>

<style>
.house_card {
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding-bottom: 20px;
  border-bottom: 2px solid #00ffff;
  margin-top: 1%;
  margin-bottom: 1%;
}

.house_card .photo_1 .buyuk img {
  width: 60vw;
  height: 30vw;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
}

.house_card .photo_1 .kucuk img {
  width: 40vw;
  height: 30vw;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
}

.house_card .photo_2 a img {
  display: grid;
  width: 20vw;
  height: 15vw;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
}

.gallery_button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
}

.gallery_button .na_button {
  width: 60px;
  height: 50px;
  cursor: pointer;
  background-color: #cecece;
  border-radius: 40px;
  font-size: 30px;
  color: white;
  border: none;
}

.gallery_button .a_button {
  width: 60px;
  height: 50px;
  cursor: pointer;
  background-color: #cecece;
  border-radius: 40px;
  font-size: 30px;
  color: white;
  border: none;
}

.gallery_button .a_button:hover {
  background-color: #888888;
}

.photos_save {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin-top: 5px;
  padding: 10px;
  border-color: black;
}

.photos_save .photos {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid rgb(50, 39, 68);
  border-radius: 5px;
  width: 100px;
  height: 50px;
}

.photos_save .save {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid rgb(50, 39, 68);
  transition: all 0.2s ease-in-out 0s, background 0.3s;
  cursor: pointer;
  border-radius: 5px;
  width: 100px;
  height: 50px;
}

.photos_save .save:hover {
  background-color: #262636;
  color: white;
}
</style>
