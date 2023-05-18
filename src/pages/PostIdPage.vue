<script>
import { mapState, mapActions } from 'vuex'
import CommentPost from '../components/CommentPost.vue'
import AddComment from '../components/AddComment.vue'

export default {
  components: {
    CommentPost,
    AddComment
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    ...mapActions({
      fetchPost: 'onePost/fetchPost',
      fetchComments: 'onePost/fetchComments'
    }),
    setModal() {
      this.isVisible = !this.isVisible
    }
  },
  mounted() {
    this.fetchPost(this.$route.params.id)
    this.fetchComments(this.$route.params.id)
  },
  computed: {
    ...mapState({
      users: (state) => state.login.users,
      post: (state) => state.onePost.post,
      comments: (state) => state.onePost.comments
    })
  }
}
</script>

<template>
  <div class="postid_div_all">
    <div class="postid_div_post">
      <h1>{{ post.title }}</h1>
      <br />
      <article>
        {{ post.body }}
      </article>
      <br />
      <h3>Comments:</h3>
      <button class="postid_button_addcomment" @click="setModal">Add comment</button>
      <ui_modal @setVisible="setModal" :show="isVisible">
        <div>
          <AddComment @save_comment="setModal" :post="post" />
        </div>
      </ui_modal>
      <div class="postid_div_comment-zone">
        <div :key="comment.id" v-for="comment in comments">
          <CommentPost :comment="comment" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.postid_div_all {
  display: flex;
  justify-content: center;
  align-items: center;
}
.postid_div_post {
  background-color: #fff;
  max-width: 80vw;
  min-width: 80vw;
  min-height: 30vh;
  border-radius: 12px;
  padding: 3%;
}

.postid_button_addcomment {
  margin-top: 1%;
  margin-bottom: 1%;
  background-color: aquamarine;
  border-radius: 12px;
  width: max-content;
  padding: 0.5%;
  border: none;
  cursor: pointer;
}

.postid_div_comment-zone {
  background-color: #d5cfcf;
  padding: 2%;
  border-radius: 12px;
}
</style>
