import { createStore } from 'vuex'


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    descargarPdf() {
      const rutaPdf = require('../assets/CV_MJPetour_01_2023.pdf');
      const link = document.createElement('a');
      link.href = rutaPdf;
      link.download = 'CV_MJPetour_01_2023.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    },
  modules: {
  }
})
