<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    post: {
      require: true
    }
  },
  data() {
    return {
      comment: {
        postId: this.post.id,
        body: '',
        name: localStorage.getItem('user')
      }
    }
  },
  methods: {
    handleChange(event) {
      this.comment.body = event.target.value
    },
    ...mapMutations({
      addComment: 'onePost/addComment'
    }),
    saveComment() {
      this.addComment(this.comment)
      this.$emit('save_comment')
    },
    getUser() {
      this.name = localStorage.getItem('user')
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>
<template>
  <div>
    <form @submit.prevent class="addcomment_form">
      <textarea :value="comment.body" @input="handleChange" type="text" name="" id="" />
      <button @click="saveComment">Add</button>
    </form>
  </div>
</template>

<style scoped>
.addcomment_form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.addcomment_form > textarea {
  margin-top: 2%;
  outline: none;
  min-width: 20vw;
  font-family: Arial, Helvetica, sans-serif;
  padding: 2%;
}

.addcomment_form > button {
  margin-top: 2%;
  width: max-content;
  padding: 5%;
  border-radius: 12px;
  border: none;
  background-color: rgb(75, 222, 178);
}
</style>
