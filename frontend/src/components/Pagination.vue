<script>
import router from '@/router'

export default {
  name: 'Pagination',
  props: ['pages'],
  data () {
    return {
      currentPage: this.$route.params.page,
      pagination: Number
    }
  },
  methods: {
    prevPage () {
      this.currentPage = this.$route.params.page
      if (this.currentPage > 1) router.push({ name: 'Houses', params: { page: --this.currentPage } })
    },
    nextPage () {
      this.currentPage = this.$route.params.page
      if (this.currentPage < this.pagination) router.push({ name: 'Houses', params: { page: ++this.currentPage } })
    },
    clickPage (num) {
      router.push({ name: 'Houses', params: { page: num } })
    }
  },
  updated () {
    this.pagination = this.pages
    console.log(this.pagination)
  }
}
</script>

<template>
  <div v-if="pagination" class="pagination">
    <div class="row">
      <div class="active_button" @click="prevPage">«</div>
        <div v-for="pag in pagination" :key="pag" class="num">
          <button @click="clickPage(pag)" class="rowNum">{{ pag }}</button>
        </div>
      <div class="active_button" @click="nextPage">»</div>
    </div>
    <div class="page">
      <h4>Page {{ this.$route.params.page }}</h4>
    </div>
  </div>
</template>

<style>
.pagination {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.pagination .row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 100px;
}

.pagination .page{
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
}

.pagination .row .active_button {
  display: inline-flex;
  width: 50px;
  background-color: #262636;
  color: white;
  font-size: 25px;
  font-weight: bolder;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
}

.pagination .row .rowNum {
  padding: 10px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  background-color: white;
}

.pagination .row .active_button:hover {
  box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 2);
  cursor: pointer;
}
</style>
