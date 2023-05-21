<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
        id: Date.now()
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create_post', this.post)
    }
  }
}
</script>

<template>
  <form class="create_posts" @submit.prevent>
    <h4>Create post</h4>
    <ui_input
      @input="post.title = $event.target.value"
      :value="post.title"
      type="text"
      placeholder="Title"
    />
    <ui_input
      @input="post.body = $event.target.value"
      :value="post.body"
      type="text"
      placeholder="Description"
    />
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
