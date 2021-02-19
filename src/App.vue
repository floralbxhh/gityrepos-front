<template>
  <router-view :key="$route.path"> </router-view>
</template>

<script>
export default {};
</script>

<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Poppins";
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 none #fff;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
