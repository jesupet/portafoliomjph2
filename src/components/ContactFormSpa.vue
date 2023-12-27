<template>
<div class="container">
  <h2>Escríbeme!</h2>
  <iframe data-tally-src="https://tally.so/embed/wvDvAX?hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="265" frameborder="0" marginheight="0" marginwidth="0" title="Escríbeme"></iframe>
  <!--
  <form action="https://formsubmit.co/4e58207c5a63c0e5d269b8e31929b0ad" method="post" class="text-center">
      <input 
        type="text" 
        class="form-control input-text" 
        id="name" 
        aria-describedby="emailHelp" 
        placeholder="Nombre"
        name="name"
        required
      >
      <input 
        type="number" 
        class="form-control input-text" 
        id="number" 
        aria-describedby="emailHelp" 
        placeholder="Teléfono"
        name="number"
      >
      <input 
        type="email" 
        class="form-control input-text" 
        id="email" 
        aria-describedby="emailHelp" 
        placeholder="Correo electrónico"
        name="email"
        required
      >
      <textarea 
        type="text" 
        class="form-control input-text comment-text" 
        id="comentario" 
        aria-describedby="emailHelp" 
        placeholder="Escribe lo que sea que quieras saber sobre mí, mis proyectos o habilidades :)"
        name="comentario"
        rows="4"
        required
      ></textarea>
      <input type="hidden" name="_next" value="https://mariajesuspetour.cl/gracias">
      <input type="hidden" name="_subject" value="Nuevo lead!">
      <button type="submit" value="enviar" class="btn btn-purple rounded-pill my-2 ">Enviar</button>
      
  </form>-->
</div>
</template>

<script>

export default {
  name: 'ContactFormSpa',
  components: {
    //GreenButton,
  },
  mounted() {
    window.Tally.loadEmbeds()
  }
  }
 


</script>

