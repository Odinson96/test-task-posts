<script lang="ts">
export default {
  name: 'acc_button',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <button class="button_new_post">{{ title }}</button>
</template>

<style scoped>
.button_new_post {
  width: 15vw;
  height: 3vh;
  margin: 0.2vw;
  border-radius: 6px;
  background-color: #23b28c;
  color: #fff;
  border: none;
}
</style>
