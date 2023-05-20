import { createStore } from 'vuex'


export default createStore({
  state: {
    showButton: false
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    setShowButton(state, value) {
      state.showButton = value;
    }
    },
  modules: {
  }
})
