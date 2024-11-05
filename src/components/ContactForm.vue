<template>
<div class="container">
  <h2>Write Me!</h2>
  <iframe data-tally-src="https://tally.so/embed/w4N0ZA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="265" frameborder="0" marginheight="0" marginwidth="0" title="Write me!"></iframe>
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

