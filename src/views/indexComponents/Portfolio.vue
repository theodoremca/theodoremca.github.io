<template>
  <section id="portfolio" class="section bg-light">
    <div class="container">
      <!-- Heading -->
      <p class=" text-center mb-2 wow fadeInUp" style="visibility: visible; animation-name: none;"><span
          class="bg-primary text-dark px-2">Portfolio</span></p>
      <h2 class="text-10 fw-600 text-center mb-5 wow fadeInUp" style="visibility: visible; animation-name: none;">Some of
        my most recent projects</h2>
      <!-- Heading end-->

      <!-- Filter Menu -->
      <ul class="portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-4 wow fadeInUp"
          style="visibility: visible; animation-name: none;">
        <li  v-for="(portfolioTag, idx) in data" :key="idx" class="nav-item"><a :data-filter="portfolioTag.name" href class="nav-link rounded-0">{{portfolioTag.title}}</a></li>
      </ul>
      <!-- Filter Menu end -->
      <div class="portfolio wow fadeInUp" style="visibility: visible; animation-name: none;">
        <div class="row g-4 mt-3 portfolio-filter" style="position: relative; height: 1152px;">
          <div v-for="(portfolio, idx) in data2" :key="idx" class="col-sm-6 col-lg-4" :class="`${portfolio.tag}`" style="position: absolute; left: 0px; top: 0px;">
            <div class="portfolio-box">
              <div  class="portfolio-img">
                <iframe v-if="portfolio.video" width="100%" height="364" :src="portfolio.video" 
                :title="portfolio.name"></iframe>
                <div v-else>
                <img  class="img-fluid d-block" :src="portfolio.image" alt> 
                <div  class="portfolio-overlay">
                  <a class="popup-ajax stretched-link" :href="portfolio.link"></a>
                  <div class="portfolio-overlay-details">
                    <p class="text-primary text-8"><i class="fas fa-file-alt"></i></p>
                      <h5 class="text-white text-5">{{portfolio.name}}</h5>
                      <span class="text-light">{{portfolio.category}}</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'portfolio',
  folioTag: 'portfolioTags',
  computed:{
    data(){
      return this.$store.state[this.$options.folioTag].data
    },
    data2(){
      return this.$store.state[this.$options.name].data
      }
  },
   
}
</script>