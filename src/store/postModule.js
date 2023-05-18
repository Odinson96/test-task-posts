import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
    isPostsLoading: false,
    searchQuery: '',
    page: 1,
    limit: 10,
    totalPages: 0
  }),
  getters: {
    sortedAndSearchedPosts(state) {
      return [...state.posts].filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    addPost(state, post) {
      state.posts.unshift(post)
    },
    removePost(state, post) {
      state.posts = state.posts.filter((el) => el.id !== post.id)
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool
    },
    setPage(state, page) {
      state.page = page
    },
    editPost(state, editPost) {
      // console.log(editPost.id, editPost.title, editPost.body);
      state.post = state.posts.map(el => {
        if (el.id === editPost.id) {
          el.body = editPost.body;
          el.title = editPost.title;
          return el
        }
        else {
          return el
        }
      })
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        });
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        commit('setPosts', response.data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false);
      }
    },
    loadMorePosts({ state, commit }) {
      setTimeout(async () => {
        try {
          commit('setPage', state.page + 1)
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: state.page,
              _limit: state.limit
            }
          });
          commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
          commit('setPosts', [...state.posts, ...response.data]);
        } catch (e) {
          console.log(e)
        }
      }, 200)
    }
  },
  namespaced: true
}
