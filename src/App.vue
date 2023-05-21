<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: { NavBar }
}
</script>

<template>
  <div class="app">
    <div class="app_div_navbar">
      <NavBar />
    </div>
    <div class="app_router_view">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app_router_view {
  margin-top: 10vh;
}

.app_div_navbar {
}
</style>
