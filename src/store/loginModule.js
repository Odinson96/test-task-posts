
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
      console.log(name);
      state.user = name
      localStorage.setItem('user', name)
    }
  },
  namespaced: true
}
