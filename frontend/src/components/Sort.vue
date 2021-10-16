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
  padding: 10px 60px;
  margin-top: 10%;
  font-weight: 400;
  font-size: 14px;
  color: dimgray;
}
.sort select:hover {
  color: black;
}
</style>
