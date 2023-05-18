<script>
export default {
  props: {
    comment: {
      required: true
    }
  },
  data() {
    return {
      commentI: this.comment,
      body: ''
    }
  },
  computed: {
    isSubComment() {
      let bool = !!(this.commentI.subComm && this.commentI.subComm.length > 0)
      console.log(bool)
      return bool
    },
    logger() {
      console.log(this.comment)
      return 1
    }
  },
  methods: {
    addSubcom() {
      if (Array.isArray(this.commentI.subComm) && this.body) {
        this.commentI.subComm.push({
          id: 1,
          postId: 1,
          name: localStorage.getItem('user'),
          body: this.body
        })
        this.body = ''
      } else if (!Array.isArray(this.commentI.subComm) && this.body) {
        this.commentI.subComm = []
        this.commentI.subComm.push({
          id: 1,
          postId: 1,
          name: localStorage.getItem('user'),
          body: this.body
        })
        this.body = ''
      }
    },
    handleChange(e) {
      this.body = e.target.value
    }
  }
}
</script>

<template>
  <div class="comment_div_all">
    <h4>Name: {{ commentI?.name }}</h4>
    <br />
    <div class="commentpost_div_comment-body">
      <pre class="commentpost_pre_body">{{ commentI?.body }}</pre>
    </div>
    <div class="commentpost_div_reply">
      <textarea
        class="commentpost_textarea_reply"
        type="text"
        @change="handleChange"
        :value="body"
      />
      <button @click="addSubcom" class="commentpost_button_reply">Reply</button>
    </div>
    <div v-if="commentI?.subComm">
      <div v-for="comm in commentI.subComm" :key="comm.id">
        <CommentPost :comment="comm" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.commentpost_button_reply {
  border: none;
  background-color: rgb(41, 186, 186);
  border-radius: 0px 12px 12px 0px;
  width: max-content;
  padding: 1%;
  margin-top: 4%;
  height: 4vh;
}
.comment_div_all {
  max-width: 30vw;
  background-color: rgb(231, 226, 219);
  margin-top: 1%;
  margin-left: 2%;
  padding: 1%;
  border-radius: 12px;
}

.commentpost_div_comment-body {
  background-color: #fff;
  padding: 3%;
  max-height: max-content;
  max-width: max-content;
  overflow-x: scroll;
  border-radius: 12px;
  box-shadow: inset 2px 2px 6px 6px rgba(181, 179, 179, 0.462),
    inset -2px -2px 6px 6px rgba(181, 180, 180, 0.398), 5px 5px 10px 10px rgba(202, 199, 199, 0.616);
}

.commentpost_pre_body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
}

.commentpost_div_reply {
  display: flex;
  align-items: center;
}

.commentpost_textarea_reply {
  margin-left: 3%;
  border-radius: 12px 0px 0px 12px;
  padding: 2%;
  border: 0.5px rgb(41, 186, 186) solid;
  outline: none;
  height: 4vh;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 4%;
}
</style>
