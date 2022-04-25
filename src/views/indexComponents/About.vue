<template>
  <section id="about" class="section">
    <div class="container">
      <!-- Heading -->
      <p class="text-center mb-2 wow fadeInUp" style="visibility: visible;"><span class="bg-primary text-dark px-2">About Me</span>
      </p>
      <h2 class="text-10 fw-600 text-center mb-5 wow fadeInUp" style="visibility: visible;">Know Me More</h2>
      <!-- Heading end-->

      <div class="row">
        <div class="col-lg-8 text-center text-lg-start wow fadeInUp" style="visibility: visible;">
          <h2 class="text-8 fw-400 mb-3">Hi, I'm <span
              class="fw-700 border-bottom border-3 border-primary">{{data.name}}</span></h2>
          <p class="text-5" v-html="data.info"></p>
        </div>
        <div class="col-lg-4 mt-4 mt-lg-0 wow fadeInUp" data-wow-delay="0.2s"
             style="visibility: visible; animation-delay: 0.2s;">
          <div class="featured-box style-4">
            <div class="featured-box-icon text-25 fw-500 bg-primary rounded-circle">
              <span class="wow heartBeat"
              data-wow-delay="1.3s" 
              style="visibility: visible; animation-delay: 1.3s;">9
              </span>
            </div>
            <h3 class="text-7 wow rubberBand" data-wow-delay="2s" style="visibility: visible; animation-delay: 2s;">
              Years of <span class="fw-700">Experience</span></h3>
          </div>
        </div>
      </div>
      <div class="row gy-3 mt-4">
        <div class="col-6 col-lg-3 wow fadeInUp" style="visibility: visible;">
          <p class="text-muted fw-500 mb-0">Name:</p>
          <p class="text-4 text-dark fw-600 mb-0">{{data.name}}</p>
        </div>
        <div class="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s"
             style="visibility: visible; animation-delay: 0.2s;">
          <p class="text-muted fw-500 mb-0">Email:</p>
          <p class="text-4 fw-600 mb-0"><a class="link-dark"  :href="'mailto:'+data.email">{{data.email}}</a></p>
        </div>
        <div class="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s"
             style="visibility: visible; animation-delay: 0.3s;">
          <p class="text-muted fw-500 mb-0">Date of birth:</p>
          <p class="text-4 text-dark fw-600 mb-0">{{data.dob}}</p>
        </div>
        <div class="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s"
             style="visibility: visible; animation-delay: 0.4s;">
          <p class="text-muted fw-500 mb-0">From:</p>
          <p class="text-4 text-dark fw-600 mb-0">{{data.city}}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'about',
   computed:{
    data(){
      return this.$store.state[this.$options.name].data;
    }
  }

}
</script>