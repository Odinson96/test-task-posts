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
      if (Array.isArray(this.commentI.subComm)) {
        this.commentI.subComm.push({
          id: 1,
          postId: 1,
          name: localStorage.getItem('user'),
          body: 'body'
        })
        this.body = ''
      } else {
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
    <h6>{{ commentI?.body }}</h6>
    <input class="commentpost_input_reply" type="text" @change="handleChange" :value="body" />
    <button @click="addSubcom" class="commentpost_button_reply">Reply</button>
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
  margin-top: 1%;
  height: 3vh;
}
.comment_div_all {
  max-width: 30vw;
  background-color: rgb(231, 226, 219);
  margin-top: 1%;
  padding: 1%;
  border-radius: 12px;
}

.commentpost_input_reply {
  margin-left: 3%;
  border-radius: 12px 0px 0px 12px;
  padding-left: 3%;
  border: 0.5px rgb(41, 186, 186) solid;
  height: 3vh;
}
</style>
