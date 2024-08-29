<template>
  <button
    v-show="showButton"
    @click="scrollToTop"
    class="scroll-button"
  >
  <svg width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="79" cy="79" r="79" transform="rotate(-180 79 79)" fill="#5241B8"/>
    <path d="M78.8786 47.5699L110.43 79.9739M78.8786 47.5699L47.3271 79.9739M78.8786 47.5699L78.8786 110.43" stroke="white" stroke-width="14" stroke-linecap="round"/>
  </svg>
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
