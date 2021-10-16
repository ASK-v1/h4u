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
      <button v-if="!(id === 0)" @click="pbutton">«</button>
    </div>
    <div class="photo_1">
      <a v-if="id === 0" class="kucuk" :href="images[id]"><img :src="images[id]"></a>
      <a v-if="!(id === 0)" class="buyuk" :href="images[id]"><img :src="images[id]"></a>
      <div class="photos_save">
        <div class="photos">
          <h4>{{ images.length }}</h4>
          <p>Photos</p>
        </div>
        <div class="save">
          <img src="../assets/icons/heart1.png" width="40">
        </div>
      </div>
    </div>
    <div class="photo_2">
      <a v-if="id === 0" :href="images[id+1]"><img :src="images[id+1]"></a>
      <a v-if="id === 0" :href="images[id+2]"><img :src="images[id+2]"></a>
    </div>
    <div class="gallery_button">
      <button v-if="!(id === images.length - 1)" @click="nbutton">»</button>
    </div>
  </div>
</template>

<style>
.house_card {
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 20px;
}

.house_card .photo_1 .buyuk img {
  width: 57.2vw;
  height: 32vw;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.14);
}

.house_card .photo_1 .kucuk img {
  width: 40vw;
  height: 32vw;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.14);
}

.house_card .photo_2 a img {
  display: grid;
  width: 20vw;
  height: 16vw;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.14);
}

.gallery_button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery_button button {
  width: 60px;
  height: 50px;
  cursor: pointer;
  background-color: #cecece;
  border-radius: 40px;
  font-size: 30px;
  color: white;
  border: none;
}
.gallery_button button:hover {
  background-color: #888888;
}
.photos_save {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin-top: 5px;
}

.photos_save .photos {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
