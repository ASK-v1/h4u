<script>
export default {
  name: 'Pagination'
}
</script>

<template>
  <div class="pagination">
    <ul>
      <li class="prev"><a href="">«</a></li>
      <li><a href="">1</a></li>
      <li class="active"><a href="">2</a></li>
      <li><a href="">3</a></li>
      <li><a href="">4</a></li>
      <li><a href="">5</a></li>
      <li><span class="delimeter">...</span></li>
      <li><a href="">8</a></li>
      <li class="next"><a href="">»</a></li>
    </ul>
  </div>
</template>

<style>
.pagination {
  display: flex;
  justify-content: center;
  padding: 14px 14px 14px 1px;
}

.pagination ul {
  list-style: none;
}

.pagination li {
  float: left;
  margin: 0 4px;
  font-size: 20px;
}

.pagination li:last-child {
  margin: 0;
}

.pagination li.active a, .pagination li a:active {
  box-shadow: none;
}

.pagination li.active a, .pagination li a:hover {
  color: #00ffff;
}

.pagination li .delimeter {
  display: block;
  padding-top: 10px;
}

.pagination a {
  padding: 4px 12px;
  border: 1px solid #d9d9d9;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.14);
  color: #262636;
  text-decoration: none;
}
</style>
