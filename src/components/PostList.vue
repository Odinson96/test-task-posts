<script>
import { TransitionGroup } from 'vue'
import PostItem from './PostItem.vue'

export default {
  props: {
    posts: {
      type: [],
      required: true
    }
  },
  components: {
    PostItem,
    TransitionGroup
  }
}
</script>

<template>
  <div v-if="posts.length > 0">
    <TransitionGroup name="post-list">
      <div class="posts" v-bind:key="post.id" v-for="post in posts">
        <PostItem @remove="$emit('remove', post)" v-bind:key="post.id" :post="post" />
      </div>
    </TransitionGroup>
  </div>
  <div v-else>
    <div class="posts">
      <h2>Posts not found</h2>
    </div>
  </div>
</template>

<style scoped>
.posts {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from {
  opacity: 0;
  transform: scale(2);
}

.post-list-move {
  transform: translateY(0.5vh);
}

.post-list-leave-to {
  opacity: 0;
  transform: rotateX(100deg);
}
</style>
