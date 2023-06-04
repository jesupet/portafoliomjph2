<template>
  <div class="background-image">
    <NavBarSpa/>
    <header class="container align-items-center">
      <div class="header-text">
        <h1>Hola, soy la Jesu. <br class="d-xl-none"/><span>Bienvenid@ a mi portafolio!</span></h1>
      </div>
    </header>
  </div>
  <div class="container" id="aboutme">
    <h2>Sobre mi</h2>
    <div class="row">
      <div class="col-12 col-sm-5">
        <div class="frame-pic">
          <img src="../assets/img/mjp.png" alt="mjp foto" class="img-fluid">
        </div>
      </div>
      <div class="col-12 col-sm-7 bio-box">
        <p>
          My friends call me Jesu or Maria. I am 30 years old and I love web design. I studied <span>Commercial Engineering</span> at Universidad Católica, where I gained an important perspective on business and management. <br/><br/>
          While working as a <span>Product Manager</span> in charge of government software development, my interest in design and coding arose. The decision to study <span>Front End Development</span> was born because it was a perfect mix between my passion for web design and my structured and organized way of solving problems. I finished my degree in June 2022 and have been working on some freelance projects. <br/><br/>In March of this year, I started working with a design agency called Vanilla. Together, we are able to offer a complete product from the needs diagnosis to the entire website building.<br/><br/>
        </p>
        <PurpleButton :isInternal="false" :buttonText="'Descarga mi CV'" externalLink="https://drive.google.com/file/d/1faoJeA1O57nakckUlpAE3xgk8KOj9och/view?usp=sharing"/>
      </div>
    </div>
  </div>
  <section id="myprojects" class="container-fluid">
    <h2>Mis Proyectos</h2>
    <div class="row">
      <div class="col-12 col-sm-6 proy-cont">
        <div class="box">
          <img src="@/assets/img/eleamchile.png" alt="" class="img-fluid">
          <div class="overlay text-center d-flex justify-content-center flex-column align-items-center">
            <PurpleButton :isInternal="false" :buttonText="'Eleam Chile'" externalLink="https://eleamchile.cl"/>
            <p class="project-p">Project Manager / Diseño UX UI</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 proy-cont">
        <div class="box">
          <img src="@/assets/img/satournow.png" alt="" class="img-fluid">
          <div class="overlay text-center d-flex justify-content-center flex-column align-items-center">
            <PurpleButton :isInternal="false" :buttonText="'Sa-tour-now!'" externalLink="https://jesupet.github.io/SaturnoGit/"/>
            <p class="project-p">Proyecto Final Carrera Front End</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 proy-cont">
        <div class="box">
          <img src="@/assets/img/futuropatagonia.png" alt="" class="img-fluid">
          <div class="overlay text-center d-flex justify-content-center flex-column align-items-center">
            <PurpleButton :isInternal="false" :buttonText="'Futuro Patagonia'" externalLink="https://futuropatagonia.cl/"/>
            <p class="project-p">Desarrollo Front End para Vanilla</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 proy-cont">
        <div class="box">
          <img src="@/assets/img/vanilla.png" alt="" class="img-fluid">
          <div class="overlay text-center d-flex justify-content-center flex-column align-items-center">
            <PurpleButton :isInternal="false" :buttonText="'Vanilla (Soon)'"/>
            <p class="project-p">Desarrollo Front End</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="toolkit" class="container text-center">
    <h2>Herramientas con las que trabajo</h2>
    <div class="tool-box text-center">
      <div class="text-center mx-2 con-tooltip">
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">
          <img src="@/assets/img/tool_kit_logos/js.png" alt="javascript logo" class="img-fluid tool-logo">
        </a>
        <div class="tooltip">
          <p>Javascript</p>
        </div>
      </div>
      <div class="text-center mx-2 con-tooltip">
        <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
          <img src="@/assets/img/tool_kit_logos/css.png" alt="css logo" class="img-fluid tool-logo">
        </a>
        <div class="tooltip">
          <p>CSS</p>
        </div>
      </div>
      <div class="text-center mx-2 con-tooltip">
        <a href="https://vuejs.org/" target="_blank">
          <img src="@/assets/img/tool_kit_logos/vue.png" alt="vue logo" class="img-fluid tool-logo">
        </a>
        <div class="tooltip">
          <p>Vue</p>
        </div>
      </div>
      <div class="text-center mx-2 con-tooltip align-items-center">
        <a href="https://sass-lang.com/" target="_blank">
          <img src="@/assets/img/tool_kit_logos/sass.png" alt="sass logo" class="img-fluid tool-logo">
        </a>
        <div class="tooltip">
          <p>Sass</p>
        </div>
      </div>
      <div class="text-center mx-2 con-tooltip">
        <a href="https://getbootstrap.com/" target="_blank">
          <img src="@/assets/img/tool_kit_logos/bootstrap.png" alt="bootstrap logo" class="img-fluid tool-logo">
        </a>
        <div class="tooltip">
          <p>Bootstrap</p>
        </div>
      </div>
      <div class="text-center mx-2 con-tooltip">
        <a href="https://www.figma.com/" target="_blank">
          <img src="@/assets/img/tool_kit_logos/figma.png" alt="figma logo" class="img-fluid tool-logo">
        </a>
        <div class="tooltip">
          <p>Figma</p>
        </div>
      </div>
      <div class="text-center mx-2 con-tooltip">
        <a href="https://trello.com/" target="_blank">
          <img src="@/assets/img/tool_kit_logos/trello.png" alt="trello logo" class="img-fluid tool-logo">
        </a>
        <div class="tooltip">
          <p>Trello</p>
        </div>
      </div>
      <div class="text-center mx-2 con-tooltip">
        <a href="https://notion.so/" target="_blank">
          <img src="@/assets/img/tool_kit_logos/notion.png" alt="notion logo" class="img-fluid tool-logo">
        </a>
        <div class="tooltip">
          <p>Notion</p>
        </div>
      </div>
    </div>
  </section>
  <section class="pb-0" id="contact">
      <div data-tf-widget="jyga5Bo3" data-tf-opacity="100" data-tf-iframe-props="title=My typeform" data-tf-transitive-search-params data-tf-medium="snippet" style="width:100%;height:500px;" class="typeform"></div>
  </section>
  <FooterPort/>

  
</template>

<script>
// @ is an alias to /src
import NavBarSpa from '@/components/NavBarSpa.vue'
import PurpleButton from '@/components/PurpleButton.vue'
import FooterPort from '@/components/FooterPort.vue'


export default {
  name: 'HomeView',
  components: {
    NavBarSpa,
    PurpleButton,
    FooterPort,
  },
  methods: {
    
  }
}
</script>
