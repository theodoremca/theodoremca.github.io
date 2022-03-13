<template>
  <section id="resume" class="section">
    <div class="container">
      <!-- Heading -->
      <p class=" text-center mb-2 wow fadeInUp animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated"
         style="visibility: visible;"><span class="bg-primary text-dark px-2">Resume</span></p>
      <h2 class="text-10 fw-600 text-center mb-5 wow fadeInUp animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated"
          style="visibility: visible;">A summary of My Resume</h2>
      <!-- Heading end-->

      <div class="row g-5 mt-5">
        <!-- My Education -->
        <div
            class="col-lg-6 wow fadeInUp animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated"
            style="visibility: visible;">
          <h2 class="text-7 fw-600 mb-4 pb-2">My Education</h2>
          <div v-for="(resume, idx) in data.resume" :key="idx" class="border-start border-2 border-primary ps-3">
            <h3 class="text-5">{{resume.name}}</h3>
            <p class="mb-2">{{resume.college}}</p>
            <p class="text-muted">{{resume.info}}</p>
            <hr class="my-4">
            
          </div>
        </div>
        <!-- My Experience -->
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s"
             style="visibility: visible; animation-delay: 0.2s; animation-name: none;">
          <h2 class="text-7 fw-600 mb-4 pb-2">My Experience</h2>
          <div v-for="(experience, idx) in data.experience" :key="idx" class="border-start border-2 border-primary ps-3">
            <h3 class="text-5"></h3>
            <p class="mb-2">{{experience.course}}</p>
            <p class="text-muted">{{experience.info}}</p>
            <hr class="my-4">
            
          </div>
        </div>
      </div>

      <!-- My Skills -->
      <h2 class="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp" style="visibility: visible; animation-name: none;">My
        Skills</h2>
      <div class="row gx-5">
        <div  v-for="(skill, idx) in data.skills" :key="idx"  class="col-md-6 wow fadeInUp" style="visibility: visible; animation-name: none;">
          <p class="fw-500 text-start mb-2">{{skill.tech}}<span class="float-end">{{skill.level}}</span></p>
          <div class="progress progress-sm mb-4">
            <div class="progress-bar" role="progressbar" :style="`width:${skill.bar}%`" :aria-valuenow="skill.bar.toString()" aria-valuemin="0"
                 aria-valuemax="100">
            </div>
          </div>
        </div>
      </div>
      <p class="text-center mt-5 wow fadeInUp" style="visibility: visible; animation-name: none;"><a href="#" 
        class="btn btn-outline-dark shadow-none rounded-0">Download CV</a>
        </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'resume',
  exp: 'experience',
  skill: 'skills',
    computed:{
    data(){
      return {
          resume:this.$store.state[this.$options.name].data,
          experience:this.$store.state[this.$options.exp].data,
          skills:this.$store.state[this.$options.skill].data
      }
  }}}
</script>