import { createStore } from 'vuex'


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    scrollToSection() {
      console.log (this.internalLink)
      const section = document.querySelector(this.internalLink);
      if (section) {
        window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
      }
    },
    },
  modules: {
  }
})
