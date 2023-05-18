<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions({
      postUser: 'login/postUser'
    }),
    ...mapMutations({
      setUser: 'login/setUser'
    }),
    handleChange(e) {
      this.name = e.target.value
    },
    login() {
      if (this.name) {
        this.setUser(this.name)
        this.$router.push('/')
      }
    }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent class="loginpage_form_all">
      <h1>Enter your name</h1>
      <input :value="name" @change="handleChange" type="text" placeholder="Name" />
      <button @click="login">Enter</button>
      <hr />
    </form>
  </div>
</template>

<style scoped>
.loginpage_form_all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 60vh;
  max-height: 100vh;
}

.loginpage_form_all > input,
.loginpage_form_all > button {
  margin-top: 0.4%;
  height: 3vh;
  width: 15vw;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
}

.loginpage_form_all > input {
  background-color: rgb(217, 234, 247);
  padding-left: 1%;
  cursor: text;
}

.loginpage_form_all > hr {
  background-color: rgb(0, 0, 0);
  width: 18vw;
  margin-top: 0.4%;
}

.loginpage_button_sign {
  background: none;
  color: rgb(95, 131, 131);
  cursor: pointer;
}
</style>
