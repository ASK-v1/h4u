<script>
export default {
  name: 'Sort'
}
</script>

<template>
  <div class="sort">
    <select>
      <option value="relevance">Relevance</option>
      <option value="recent">Most recent</option>
      <option value="highest">Highest price</option>
      <option value="lowest">Lowest price</option>
    </select>
  </div>
</template>

<style>
.sort select {
  padding: 10px 50px;
  margin-top: 10%;
  color: dimgray;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}
.sort select:hover {
  color: black;
}
</style>
