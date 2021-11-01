<script>
export default {
  name: 'Spinner'
}
</script>

<template>
<div class="loading">
  <div class="loading-dot"></div>
  <div class="loading-dot"></div>
  <div class="loading-dot"></div>
  <div class="loading-dot"></div>
  <div class="loading-dot"></div>
  <div class="loading-dot"></div>
</div>
</template>

<style>
.loading {
  position: fixed;
  height: 60px;
  width: 60px;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  animation: loading 1.2s infinite linear both;
}

.loading-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  animation: loading-dot 2s infinite ease-in-out both;
}

.loading-dot:before {
  content: '';
  display: block;
  width: 20%;
  height: 20%;
  background-color: #262636;
  border-radius: 100%;
}

.loading-dot:nth-child(1) { animation-delay: -0.6s; }
.loading-dot:nth-child(2) { animation-delay: -0.5s; }
.loading-dot:nth-child(3) { animation-delay: -0.4s; }
.loading-dot:nth-child(4) { animation-delay: -0.3s; }
.loading-dot:nth-child(5) { animation-delay: -0.2s; }
.loading-dot:nth-child(6) { animation-delay: -0.1s; }

@keyframes loading {
  100% { transform: rotate(360deg); }
}

@keyframes loading-dot {
  100% { transform: rotate(360deg); }
}
</style>
