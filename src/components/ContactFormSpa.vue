<template>
<div class="container">
  <h2>Escríbeme!</h2>
  <form action="https://formsubmit.co/mjpetour@gmail.com" method="post" class="text-center">
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
      <!--<GreenButton :type="'submit'" :buttonText="'Enviar'" class="mx-3" value="enviar"/>-->
  </form>
</div>
</template>

<script>

export default {
  name: 'ContactFormSpa',
  components: {
    //GreenButton,
  },
 
}

</script>

