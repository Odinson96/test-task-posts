<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  }
}
</script>

<template>
  <nav class="navbar_div_all">
    <button class="navbar_button_router">
      <RouterLink class="navbar_link_router" to="/">Posts</RouterLink>
    </button>
    <button @click="logout" class="navbar_button_router">Logout</button>
  </nav>
</template>

<style scoped>
.navbar_div_all {
  display: flex;
  background-color: #4d1818ab;
  padding-top: 1%;
  padding-bottom: 1%;
  position: fixed;
  top: 0%;
  margin-bottom: 10vh;
  min-width: 100vw;
  border-radius: 0px 0px 12px 12px;
  box-shadow: 2px 5px 5px 1px gray;
}

.navbar_link_router {
  text-decoration: none;
  color: black;
}

.navbar_button_router {
  margin-left: 1%;
  min-width: 6vw;
  min-height: 3vh;
  background-color: rgba(166, 206, 241, 0.594);
  border-radius: 10px;
  border: none;
}
</style>
