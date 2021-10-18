<script>
export default {
  name: 'HouseCard',
  data () {
    return {
      images: ['https://images.unsplash.com/photo-1601056645918-329b756e54fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2067&q=80', 'https://images.unsplash.com/photo-1574286962959-1c2cddf17530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80', 'https://images.unsplash.com/photo-1560449752-ac541afdd6b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1560185127-1902ccdc5094?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'],
      id: 0
    }
  },
  methods: {
    nbutton () {
      ++this.id
    },
    pbutton () {
      --this.id
    }
  }
}
</script>

<template>
  <div class="house_card">
    <div class="gallery_button">
      <button v-if="!(id === 0)" @click="pbutton" class="a_button">«</button>
      <button v-else class="na_button">«</button>
    </div>
    <div class="photo_1">
      <a v-if="(id === 0)" class="kucuk" :href="images[id]"><img :src="images[id]"></a>
      <a v-if="!(id === 0)" class="buyuk" :href="images[id]"><img :src="images[id]"></a>
      <div class="photos_save">
        <div class="photos">
          <h4>{{ images.length }}</h4>
          <p>Photos</p>
        </div>
        <div class="save">
          <img src="../assets/icons/heart.png" width="35">
          <p>Save</p>
        </div>
      </div>
    </div>
    <div class="photo_2">
      <a v-if="id === 0" :href="images[id+1]"><img :src="images[id+1]"></a>
      <a v-if="id === 0" :href="images[id+2]"><img :src="images[id+2]"></a>
    </div>
    <div class="gallery_button">
      <button v-if="!(id === images.length - 1)" @click="nbutton" class="a_button">»</button>
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
  width: 54vw;
  height: 30vw;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
}

.house_card .photo_1 .kucuk img {
  width: 36vw;
  height: 30vw;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
}

.house_card .photo_2 a img {
  display: grid;
  width: 18vw;
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
