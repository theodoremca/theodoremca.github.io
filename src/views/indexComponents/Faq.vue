<template>
  <section id="faq" class="section bg-light">
    <div class="container">
      <div class="row gy-5">
        <div class="col-lg-6 order-1 order-lg-0 wow fadeInUp" style="visibility: hidden; animation-name: none;">
          <!-- Heading -->
          <p class="text-center text-lg-start mb-2"><span class="bg-primary text-dark px-2">FAQ</span></p>
          <h2 class="text-10 fw-600 text-center text-lg-start mb-5">Have any questions?</h2>
          <!-- Heading end-->
          <div class="accordion accordion-flush" id="faqTopics">
            <faq-item v-for="(faq, idx) in data" :key="idx" :faq="faq" :idx="idx"></faq-item>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn"
             data-wow-delay="1s" style="visibility: hidden; animation-delay: 1s; animation-name: none;"><img
            class="img-fluid" src="images/faq.png" title="FAQ" alt="faq"></div>
      </div>
    </div>
  </section>
</template>
<script>
import FaqItem from './FaqItem.vue';
export default {
  components: { FaqItem },
  name: 'faq',
  computed: {
    data(){
      return this.$store.state[this.$options.name].data;
    }
  }
}
</script>