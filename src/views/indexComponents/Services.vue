<template>
  <section id="services" class="section bg-light">
    <div class="container">
      <p class="text-center mb-2 wow fadeInUp" style="visibility: visible">
        <span class="bg-primary text-dark px-2">What I Do?</span>
      </p>
      <h2
        class="text-10 fw-600 text-center mb-5 wow fadeInUp"
        style="visibility: visible"
      >
        How I can help your next project
      </h2>

      <div class="row gy-5 mt-5">
        <div v-for="(service,idx) in data" :key="idx"  class="col-sm-6 col-lg-4 wow fadeInUp" style="visibility: visible">
          <div class="featured-box text-center px-md-4">
            <div class="featured-box-icon text-primary text-13">
              <i :class="service.svg"></i>
            </div>
            <h3 class="text-6 fw-600 mb-3">{{service.name}}</h3>
            <p class="text-muted mb-0" v-html="service.info">
        
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "services",
  computed:{
    data(){
      return this.$store.state[this.$options.name].data;
    }
  }
};
</script>