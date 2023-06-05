<template>
  <button
    v-show="showButton"
    @click="scrollToTop"
    class="scroll-button"
  >
    <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
      scrolling: false
    };
  },
  methods: {
    scrollToTop() {
      const scrollDuration = 100; // Duración de la animación de desplazamiento en milisegundos
      const scrollStep = -window.scrollY / (scrollDuration / 100); // Cálculo del tamaño de paso para el desplazamiento suave
      let scrollCount = 0;

      const animateScroll = () => {
        window.requestAnimationFrame(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
            scrollCount++;
            if (scrollCount < Math.abs(scrollDuration / 100)) {
              animateScroll();
            }
          }
        });
      };

      animateScroll();
    },
    handleScroll() {
      const scrollOffset = 100; // Valor de desplazamiento vertical que activará la aparición del botón
      this.showButton = window.scrollY > scrollOffset; // Mostrar el botón cuando el desplazamiento vertical sea mayor que scrollOffset
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}
</script>
