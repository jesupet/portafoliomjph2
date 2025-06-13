<template>
  <WhatsAppBtn class="whatsapp fixed-button"/>
  <ScrollButton/>
  <div class="background-image">
    <NavBar/>
    <header class="container align-items-center">
      <div class="header-text">
        <h1>Hello my name is Maria. <br class="d-xl-none"/><span>Welcome to my portfolio!</span></h1>
      </div>
    </header>
  </div>
  <div class="container" id="aboutme">
    <h2>About Me</h2>
    <div class="row">
      <div class="col-12 col-sm-5">
        <div class="frame-pic">
          <img src="../assets/img/mjp.png" alt="mjp foto" class="img-fluid">
        </div>
      </div>
      <div class="col-12 col-sm-7 bio-box">
        <p>
          As a curious and active person that I am, I am always looking for new things to learn, such as sports, crafts, technologies, etc. 
          <br/><br/>
          I studied Business Engineering and in recent years I have explored <span>digital world</span>, where by combining my creativity with my organizational skills, I have learned new tools and developed great projects, especially during the pandemic, where I studied <span>Front End Development</span>, learning tools such as JavaScript, HTML, and CSS.
          <br/><br/>
          Currently, I am searching for web projects where I can support initiatives with a clear purpose, especially related to the world of <span>sustainability and environmental care</span>, topics that I am passionate about and that have guided my career to this day.
          <br/><br/>
          I invite you to write to me so we can get to know each other and talk about your ideas and projects!
          <br/><br/>
        </p>
        <PurpleButton class="btn-red" :isInternal="false" :buttonText="'Download my CV'" externalLink="https://www.mariajesuspetour.cl/CV_MJPetour_08_2024_English.pdf"/>
      </div>
    </div>
  </div>
  <section id="myprojects" class="container-fluid">
    <h2>My Projects</h2>
    <div class="row">
      <CardProyectoIng/>
    </div>
  </section>
  <section id="toolkit" class="container text-center">
    <h2>Tool Kit</h2>
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
      <ContactForm/>
  </section>
  <FooterPort/>

  
</template>

<script>
// @ is an alias to /src
import WhatsAppBtn from '@/components/WhatsAppBtn.vue'
import NavBar from '@/components/NavBar.vue'
import PurpleButton from '@/components/PurpleButton.vue'
import FooterPort from '@/components/FooterPort.vue'
import ContactForm from '@/components/ContactForm.vue'
import ScrollButton from '@/components/ScrollButton.vue'
import CardProyectoIng from '@/components/CardProyectoIng.vue'


export default {
  name: 'HomeView',
  components: {
    WhatsAppBtn,
    NavBar,
    PurpleButton,
    FooterPort,
    ContactForm,
    ScrollButton,
    CardProyectoIng
  },
  methods: {
    
  }
}
</script>
