import axios from 'axios'


export const onePostModule = {
    state: () => ({
        post: {},
        error: '',
        isLoading: false,
        comments: []
    }),
    mutations: {
        addComment: function addComment(state, comment) {
            console.log(comment.body, comment.postId);
            let newComment = {
                postId: comment.postId,
                id: Math.random(),
                name: localStorage.getItem('user'),
                email: String(Math.random()),
                body: comment.body
            }
            state.comments.push(newComment)
        },
    },

    actions: {
        fetchPost: async function fetchPost({ state }, params) {
            state.isLoading = true
            await axios
                .get(`https://jsonplaceholder.typicode.com/posts/${params}`)
                .then((res) => {
                    state.post = res.data
                })
                .catch((err) => (err.message ? state.error = err.message : state.error = 'Error connect to server'))
            state.isLoading = false
        },
        fetchComments: async function fetchComments({ state }, params) {
            state.isLoading = true
            await axios
                .get(`https://jsonplaceholder.typicode.com/comments?postId=${params}`)
                .then((res) => {
                    state.comments = res.data
                })
                .catch((err) => (err.message ? state.error = err.message : state.error = 'Error connect to server'))
            state.isLoading = false
        },

    },
    namespaced: true
}