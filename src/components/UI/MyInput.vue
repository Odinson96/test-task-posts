<script>
export default {
  name: 'ui_input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<template>
  <input
    name="app_input_search"
    :value="value"
    @input="updateInput"
    class="input_new_post"
    type="text"
  />
</template>

<style scoped>
.input_new_post {
  width: 20vw;
  height: 3vh;
  margin: 0.2vw;
  border-radius: 6px;
  padding-left: 0.6%;
  border: none;
  outline: none;
  padding-left: 3%;
}
</style>
