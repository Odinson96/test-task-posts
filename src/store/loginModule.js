
export const loginModule = {
  state: () => ({
    user: ''
  }),
  actions: {
    postUser: function postUser(state) {
      sessionStorage.setItem('user', state.user)
    }
  },
  mutations: {
    setUser(state, name) {
      state.user = name
      localStorage.setItem('user', name)
    }
  },
  namespaced: true
}
