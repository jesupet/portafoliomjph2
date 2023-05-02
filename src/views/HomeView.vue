<template>
<div class="background-image">
  <NavBar/>
  <header class="container align-items-center">
    <div>
      <h1>Hello my name is Maria. <span>Welcome to my portfolio!</span></h1>
    </div>
  </header>
  <section id="aboutme" class="container">
    <h2>About Me</h2>
    <div class="row">
      <div class="col-12 col-sm-5">
        <div class="frame-pic">
          <img src="../assets/img/mjp.png" alt="mjp foto" class="img-fluid">
        </div>
      </div>
      <div class="col-12 col-sm-7 bio-box">
        <p>
          My friends call me Jesu or Maria. I am 30 years old and I love web design. I studied <span>Commercial Engineering</span> at the Catholic University, where I gained an important perspective on business and management. 
          While working as a <span>Product Manager</span> in charge of government software development, my interest in design and coding arose. The decision to study <span>Front End Development</span> was born because it was a perfect mix between my passion for web design and my structured and organized way of solving problems. I finished my degree in June 2022 and have been working on some freelance projects. In March of this year, I started working with a design agency called Vanilla. Together, we are able to offer a complete product from the needs diagnosis to the entire website building.
        </p>
        <PurpleButton @click="descargarPdf" :buttonText="'Download my CV'" :to="''"/>
      </div>
    </div>
  </section>
  <section id="myprojects" class="container-fluid">
    <h2>My Projects</h2>
    <div class="row">
      <div class="col-12 col-sm-6 proy-cont">
        <div class="box">
          <img src="@/assets/img/eleamchile.png" alt="" class="img-fluid">
          <div class="overlay text-center d-flex justify-content-center flex-column align-items-center">
            <PurpleButton :buttonText="'Eleam Chile'" :href="'https://eleamchile.cl'"/>
            <p>Project Manager / Diseño UX UI</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 proy-cont">
        <div class="box">
          <img src="@/assets/img/satournow.png" alt="" class="img-fluid">
          <div class="overlay text-center d-flex justify-content-center flex-column align-items-center">
            <PurpleButton :buttonText="'Sa-tour-now!'" :href="'https://jesupet.github.io/SaturnoGit/'"/>
            <p>Final Project Front End Career</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 proy-cont">
        <div class="box">
          <img src="@/assets/img/futuropatagonia.png" alt="" class="img-fluid">
          <div class="overlay text-center d-flex justify-content-center flex-column align-items-center">
            <PurpleButton :buttonText="'Futuro Patagonia'" :href="'https://futuropatagonia.cl/'"/>
            <p>Front End Developer with Vanilla</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 proy-cont">
        <div class="box">
          <img src="@/assets/img/vanilla.png" alt="" class="img-fluid">
          <div class="overlay text-center d-flex justify-content-center flex-column align-items-center">
            <PurpleButton :buttonText="'Vanilla (Soon)'"/>
            <p>Front End Developer with Vanilla</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="toolkit" class="container text-center">
    <h2>Tool Kit</h2>
    <div class="tool-box">
      <div class="text-center mx-2">
        <img src="@/assets/img/tool_kit_logos/js.png" alt="javascript logo" class="img-fluid tool-logo">
      </div>
      <div class="text-center mx-2">
        <img src="@/assets/img/tool_kit_logos/css.png" alt="css logo" class="img-fluid tool-logo">
      </div>
      <div class="text-center mx-2">
        <img src="@/assets/img/tool_kit_logos/vue.png" alt="vue logo" class="img-fluid tool-logo">
      </div>
      <div class="text-center mx-2">
        <img src="@/assets/img/tool_kit_logos/sass.png" alt="sass logo" class="img-fluid tool-logo">
      </div>
      <div class="text-center mx-2">
        <img src="@/assets/img/tool_kit_logos/bootstrap.png" alt="bootstrap logo" class="img-fluid tool-logo">
      </div>
      <div class="text-center mx-2">
        <img src="@/assets/img/tool_kit_logos/figma.png" alt="bootstrap logo" class="img-fluid tool-logo">
      </div>
      <div class="text-center mx-2">
        <img src="@/assets/img/tool_kit_logos/trello.png" alt="bootstrap logo" class="img-fluid tool-logo">
      </div>
      <div class="text-center mx-2">
        <img src="@/assets/img/tool_kit_logos/notion.svg.png" alt="bootstrap logo" class="img-fluid tool-logo">
      </div>
    </div>
    
  </section>
</div>
  
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import PurpleButton from '@/components/PurpleButton.vue'
import { mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    PurpleButton,
  },
  methods: {
    ...mapActions(['descargarPdf'])
  }
}
</script>
