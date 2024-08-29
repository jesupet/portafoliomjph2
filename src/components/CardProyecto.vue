<template>
  <div class="col-12 col-sm-6 proy-cont" v-for="(proyecto, index) in proyectos" 
  :key="index"  >
    <div class="box">
      <div class="img-cont">
        <img :src="imagePath(proyecto.img)" alt="" class="img-fluid">
      </div>
      <div class="overlay text-center d-flex justify-content-center flex-column align-items-center">
        <PurpleButton :isInternal="false" :buttonText="proyecto.nombre" :externalLink="proyecto.url"/>
        <p class="project-p">{{ proyecto.descripcion }}</p>
        <p class="project-p pt-0">{{ proyecto.año }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PurpleButton from '@/components/PurpleButton.vue'
import { mapState } from 'vuex'

export default {
  name: 'CardProyecto',
  components: {
      PurpleButton,
  },
  computed: {
    ...mapState(['proyectos']),
    
  },
  methods: {
    imagePath(imagen) {
      return  require(`@/assets/img/${imagen}`)
    }
  }
}

</script>

