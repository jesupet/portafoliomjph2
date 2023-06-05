<template>
  <WhatsAppBtn class="whatsapp fixed-button" :v-if="showButton"/> 
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
          Siempre he sido una persona curiosa y activa, buscando cosas nuevas que aprender, ya sea nuevos deportes, manualidades, programas, formas de hacer las cosas, etc. Después de estudiar Ingeniería Comercial me empecé a interesar por el <span>mundo digital</span>, vinculando mi lado creativo con mi mente organizada pude llevar a cabo grandes proyectos en este ámbito, sobre todo durante la pandemia. Fue en ese período donde estudié <span>Desarrollo Front End</span> y comencé a entrar en el mundo de la programación. 
          <br/><br/>
          Actualmente estoy buscando desarrollar proyectos web donde pueda apoyar emprendimientos o empresas que tengan un propósito que me haga sentido. Lo veo como una forma de integrar a mi carrera mi <span>fuerte motivación por la sustentabilidad.</span>
          <br/><br/>
        </p>
        <PurpleButton :isInternal="false" :buttonText="'Descarga mi CV'" externalLink="https://drive.google.com/file/d/1jq5uKrAo-rOzXr56NFP4A97835-5mTH2/view?usp=sharing"/>
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
import WhatsAppBtn from '@/components/WhatsAppBtn.vue'
import NavBarSpa from '@/components/NavBarSpa.vue'
import PurpleButton from '@/components/PurpleButton.vue'
import FooterPort from '@/components/FooterPort.vue'


export default {
  name: 'HomeView',
  components: {
    WhatsAppBtn,
    NavBarSpa,
    PurpleButton,
    FooterPort,
  },
  methods: {
    
  }
}
</script>
