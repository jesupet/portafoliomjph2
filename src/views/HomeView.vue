<template>
<div class="background-image">
  <NavBar/>
  <header class="container align-items-center">
    <div>
      <h1>Hello my name is Maria. <span>Welcome to my portfolio!</span></h1>
    </div>
  </header>
</div>
  
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>
