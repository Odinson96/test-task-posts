<script>
import PostForm from '../components/PostForm.vue'
import PostList from '../components/PostList.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { debounce } from '../components/functions/debounce'
export default {
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      isVisible: false,
      option: ''
    }
  },
  methods: {
    ...mapMutations({
      setPage: (state) => state.post.mutations.setSelectedSort,
      setSearchQuery: 'post/setSearchQuery',
      addPost: 'post/addPost',
      removePost: 'post/removePost'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      loadMorePosts: 'post/loadMorePosts'
    }),
    setModal() {
      this.isVisible = !this.isVisible
    },
    createPost(post) {
      this.addPost(post)
      this.setModal()
    },
    setSearch(event) {
      debounce(this.setSearchQuery(event.target.value), 100)
    },
    savePost(id, post) {
      this.editPost(id, post)
    }
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages
    }),
    ...mapGetters({
      searchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<template>
  <div>
    <div class="create_post_div">
      <acc_button @click="setModal" :title="'Create post'"></acc_button>
      <div class="app_input_search">
        <ui_input placeholder="Search..." @input="setSearch" name="search_input" />
        <button class="postpage_button_search">Search</button>
      </div>
    </div>
    <ui_modal @setVisible="setModal" :show="isVisible">
      <div>
        <PostForm @create_post="createPost" />
      </div>
    </ui_modal>
  </div>
  <div v-if="!isLoading">
    <div v-if="error" class="create_post_div">
      <h1>{{ error }}</h1>
    </div>
    <PostList v-else @remove="removePost" :posts="searchedPosts" />
  </div>
  <div v-else class="create_post_div"><h1>Loading...</h1></div>
  <div v-Vintersection="loadMorePosts" class="observer"></div>
</template>

<style scoped>
.app_select_sort {
  border-radius: 12px;
}

.app_div_sort {
  margin-left: 2%;
  margin-top: -0.7%;
}
.create_post_div {
  display: flex;
  justify-content: center;
  padding: 2%;
}

.page__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -10vh;
}

.app_button_page {
  margin-left: 5vw;
  min-width: 2vw;
  min-height: 3vh;
  margin-bottom: 5vh;
  margin-top: 3vh;
  border-radius: 12px;
  border: 1px rgba(19, 57, 2, 0.835) solid;
}

.app_button_currentpage {
  margin-left: 5vw;
  min-width: 2vw;
  min-height: 3vh;
  margin-bottom: 5vh;
  margin-top: 3vh;
  border-radius: 12px;
  border: 1px rgb(76, 220, 9) solid;
}

.postpage_button_search {
  border-radius: 0px 12px 12px 0px;
  height: 3vh;
  min-width: 5vw;
  border: none;
  background-color: #efefef;
  margin-left: -0.6vw;
}

.observer {
  overflow: hidden;
  height: 10vh;
}
</style>
