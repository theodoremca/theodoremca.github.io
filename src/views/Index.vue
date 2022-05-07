<template>
  <div id="main-wrapper">
    <header-component />

    <div id="content" role="main">
      <div id="styles-switcher">
        <theme-switcher />
      </div>
      <intro />
      <about />
      <services />
      <!--    fix visibilty-->
      <resume />
      <!-- <portfolio /> -->
      <hero-component />
      <faq />
      <testimonial />
      <contact />
    </div>
    <footer-component />
  </div>
</template>
<script>
import Intro from "@/views/indexComponents/Intro";
import HeaderComponent from "../components/HeaderComponent";
import About from "@/views/indexComponents/About";
// import Portfolio from "@/views/indexComponents/Portfolio";
import Resume from "@/views/indexComponents/Resume";
import Services from "@/views/indexComponents/Services";
import HeroComponent from "@/components/HeroComponent";
import Faq from "@/views/indexComponents/Faq";
import Testimonial from "@/views/indexComponents/Testimonial";
import Contact from "@/views/indexComponents/Contact";
import FooterComponent from "@/components/FooterComponent";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";

export default {
  components: {
    FooterComponent,
    HeroComponent,
    Contact,
    Testimonial,
    Resume,
    Intro,
    About,
    Services,
    Faq,
    // Portfolio,
    HeaderComponent,
    ThemeSwitcher,
  },
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "../../js/theme.js";
    script.defer;
    script.async;
    document.body.appendChild(script);
  },
};
</script>
