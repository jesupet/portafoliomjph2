<template>
  <nav class="navbar navbar-dark navbar-expand-lg" :class="{ 'navbar': true, 'scrolled': scrolled }">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home', hash: '#'+'aboutme'}">About Me</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home', hash: '#'+'myprojects'}">My Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home', hash: '#'+'toolkit'}">Tool Kit</router-link>
          </li>
          <li>
            <router-link class="btn btn-purple rounded-pill" aria-current="page" :to="{name: 'home', hash: '#'+'contact'}">Write Me!</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
  components: {
  },
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
