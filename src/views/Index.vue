<template>
<div id="main-wrapper">
  <header-component/>
  <div id="content" role="main">
    <intro/>
    <about/>
    <services/>
<!--    fix visibilty-->
    <resume/>
    <portfolio/>
    <hero-component/>
    <faq/>
    <testimonial/>
    <contact/>
  </div>
  <footer-component/>
</div>
</template>
<script>
import HeaderComponent from "../components/HeaderComponent";
import Portfolio from "@/views/indexComponents/Portfolio";
import Faq from "@/views/indexComponents/Faq";
import Services from "@/views/indexComponents/Services";
import About from "@/views/indexComponents/About";
import Intro from "@/views/indexComponents/Intro";
import Resume from "@/views/indexComponents/Resume";
import Testimonial from "@/views/indexComponents/Testimonial";
import Contact from "@/views/indexComponents/Contact";
import HeroComponent from "@/components/HeroComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    FooterComponent,
    HeroComponent, Contact, Testimonial, Resume, Intro, About, Services, Faq, Portfolio, HeaderComponent}
}
</script>
