<template>
  <WhatsAppBtn class="whatsapp fixed-button" :v-if="showButton"/> 
  
  <div class="background-image" v-cloak id="main-page">
    <ScrollButton/>
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
          Como la persona curiosa y activa que soy, siempre estoy buscando cosas nuevas que aprender, como deportes, manualidades, tecnologías, etc. Estudié Ingeniería Comercial y los últimos años he explorado el <span>mundo digital</span>, donde  vinculando mi creatividad con mi capacidad organizacional he aprendido nuevas herramientas y desarrollado grandes proyectos, sobre todo durante la pandemia, donde estudié <span>Desarrollo Front End</span> aprendiendo herramientas como JavaScript, HTML y CSS.
          <br/><br/>
          Actualmente estoy en la búsqueda de proyectos web donde pueda apoyar iniciativas con un propósito claro, especialmente vinculado al mundo de la <span>sustentabilidad y el cuidado del medio ambiente</span>, temas que me apasionan y que han guiado mi carrera hasta el día de hoy.
          <br/><br/>
          Te invito a que me escribas para que podamos conocernos y conversar sobre tus ideas y proyectos!
          <br/><br/>
        </p>
        <PurpleButton :isInternal="false" :buttonText="'Descarga mi CV'" externalLink="https://www.mariajesuspetour.cl/CV_MJPetour_08_2024.pdf"/>
      </div>
    </div>
  </div>
  <section id="myprojects" class="container-fluid">
    <h2>Mis Proyectos</h2>
    <div class="row">
      <CardProyecto/>
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
  <section class="contact-spa" id="contact">
      <ContactFormSpa/>
  </section>
  <FooterPort/>

  
</template>

<script>
// @ is an alias to /src
import WhatsAppBtn from '@/components/WhatsAppBtn.vue'
import NavBarSpa from '@/components/NavBarSpa.vue'
import PurpleButton from '@/components/PurpleButton.vue'
import FooterPort from '@/components/FooterPort.vue'
import ContactFormSpa from '@/components/ContactFormSpa.vue'
import ScrollButton from '@/components/ScrollButton.vue'
import CardProyecto from '@/components/CardProyecto.vue'

export default {
  name: 'HomeView',
  components: {
    WhatsAppBtn,
    NavBarSpa,
    PurpleButton,
    FooterPort,
    ContactFormSpa,
    ScrollButton,
    CardProyecto,
  },
  methods: {
    
  }
}
</script>
