<script>
export default {
  name: 'Results',
  props: ['total']
}
</script>

<template>
  <div v-if="this.total >= 0" class="results">
    <h1>{{ total }} results</h1>
    <h3 v-if="this.total === 0">Select a larger search area or remove one or more filters.</h3>
  </div>
</template>

<style>
.results {
  background-color: rgb(222, 222, 222);
  padding: 50px;
  text-align: center;
  margin-top: 50px;
  color: rgba(0, 0, 0, 0.8);
}
</style>
