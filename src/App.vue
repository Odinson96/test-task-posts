<script>
import NavBar from '@/components/NavBar.vue'
import { mapState } from 'vuex'
export default {
  components: { NavBar },
  computed: {
    ...mapState({
      auth: (state) => state.login.auth
    })
  }
}
</script>

<template>
  <div class="app">
    <div v-if="auth" class="app_div_navbar">
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
</style>
