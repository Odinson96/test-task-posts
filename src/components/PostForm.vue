<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
        id: 0
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create_post', this.post)
      this.post = {
        body: '',
        title: '',
        id: 0
      }
    }
  }
}
</script>

<template>
  <form class="create_posts" @submit.prevent>
    <h4>Create post</h4>
    <ui_input v-VFocus v-model:value="post.title" type="text" placeholder="Title" />
    <ui_input v-model:value="post.body" type="text" placeholder="Description" />
    <acc_button :title="'Create post'" @click="createPost"></acc_button>
  </form>
</template>

<style scoped>
.create_posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
