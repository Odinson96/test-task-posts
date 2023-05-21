<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    post: {
      required: true
    }
  },
  data() {
    return {
      editPost: {
        title: this.post.title,
        body: this.post.body,
        id: this.post.id
      }
    }
  },
  methods: {
    ...mapMutations({
      postEditor: 'post/editPost'
    }),
    savePost() {
      this.postEditor(this.editPost)
      this.$emit('save')
    }
  }
}
</script>

<template>
  <form class="create_posts" @submit.prevent>
    <h4>Edit post</h4>
    <textarea
      class="editpost_input_ui"
      v-VFocus
      :value="editPost.title"
      @input="editPost.title = $event.target.value"
      type="text"
      placeholder="Title"
    />
    <textarea
      class="editpost_input_ui"
      :value="editPost.body"
      @input="editPost.body = $event.target.value"
      type="text"
      placeholder="Description"
    />
    <acc_button :title="'Edit post'" @click="savePost"></acc_button>
  </form>
</template>

<style scoped>
.create_posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  min-width: 70vw;
}

.editpost_input_ui {
  min-height: 10vh;
  min-width: 50vw;
  border-radius: 12px;
  padding: 1%;
  margin: 0.5%;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
