<template>
<nav class="navbar navbar-dark navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarNav">
        <div class="text-end p-4">
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <ul class="navbar-nav ms-lg-auto align-items-center">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
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
            <router-link class="btn btn-purple rounded-pill btn-nav" aria-current="page" :to="{name: 'home', hash: '#'+'contact'}">Write Me!</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
