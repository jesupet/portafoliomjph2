<template>
<div class="container">
  <h2>Write Me!</h2>
  <form action="https://formsubmit.co/4e58207c5a63c0e5d269b8e31929b0ad" method="post" class="text-center">
      <input 
        type="text" 
        class="form-control input-text" 
        id="name" 
        aria-describedby="emailHelp" 
        placeholder="Name"
        name="name"
        required
      >
      <input 
        type="number" 
        class="form-control input-text" 
        id="number" 
        aria-describedby="emailHelp" 
        placeholder="Contact Number"
        name="number"
      >
      <input 
        type="email" 
        class="form-control input-text" 
        id="email" 
        aria-describedby="emailHelp" 
        placeholder="Email"
        name="email"
        required
      >
      <textarea 
        type="text" 
        class="form-control input-text comment-text" 
        id="comentario" 
        aria-describedby="emailHelp" 
        placeholder="Write whatever you would want to know about me, my projects or my abilities :)"
        name="comentario"
        rows="4"
        required
      ></textarea>
      <input type="hidden" name="_next" value="https://mariajesuspetour.cl/thankyou">
      <input type="hidden" name="_subject" value="Nuevo lead!">
      <button type="submit" value="enviar" class="btn btn-purple rounded-pill my-2 ">Submit</button>
      <!--<GreenButton :type="'submit'" :buttonText="'Enviar'" class="mx-3" value="enviar"/>-->
  </form>
</div>
</template>

<script>

export default {
  name: 'ContactForm',
  components: {
    //GreenButton,
  },
  mounted() {
    window.Tally.loadEmbeds()
  }
}

</script>

