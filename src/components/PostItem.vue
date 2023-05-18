<script>
import EditPost from './EditPost.vue'
export default {
  data() {
    return {
      isVisible: false
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    setModal() {
      this.isVisible = !this.isVisible
    }
  },
  components: { EditPost }
}
</script>
<template>
  <div class="post">
    <article>
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Body: </strong>{{ post.body }}</div>
      <button @click="$router.push(`posts/${post.id}`)" class="postitem_but_open">Open</button>
      <button @click="setModal" class="postitem_but_open">Edit</button>
      <ui_modal @setVisible="setModal" :show="isVisible">
        <div>
          <EditPost @save="setModal" :post="post" />
        </div>
      </ui_modal>
    </article>
    <div class="div_but_post">
      <button @click="$emit('remove', post)" class="del_but">X</button>
    </div>
  </div>
</template>
<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px black solid;
  min-width: 70vw;
  max-width: 70vw;
  min-height: 20vh;
  max-height: 20vh;
  margin: 1vw;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 1px 4px 8px 1px black;
}

.del_but {
  width: 3vw;
  height: 3vh;
  border-radius: 12px;
  border: none;
  background-color: #cf2727;
  color: #fff;
  transition: all 0.4s ease-in;
  float: right;
}

.del_but:hover {
  background-color: #f10c0c;
  cursor: pointer;
  box-shadow: 1px 1px 6px 1px rgb(200, 64, 64);
}

.postitem_but_open {
  background-color: rgb(88, 183, 156);
  color: white;
  border-radius: 12px;
  border: none;
  width: 8vw;
  height: 3vh;
  margin-top: 5%;
  cursor: pointer;
  margin-left: 1%;
}
</style>
