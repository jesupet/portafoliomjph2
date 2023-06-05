<template>
  <div class="mi-pagina-vue">
    <div class="background-image7 big-cont">
      <div class="container-fluid text-center thanks-cont">
        <h1 class="big-txt espaciado">¡Gracias!</h1>
        <p class="bajada espaciado">Te responderé dentro de los próximos 3 días.</p>
        <router-link class="btn btn-purple rounded-pill" aria-current="page" :to="'/'">Volver</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'ThankYouPage',
  components: {
  
  },
  computed: {

  }
}
</script>

<style scoped>
  

</style>