<template>
        <div  class="accordion-item">
              <h2 class="accordion-header" :id="`flush-headingOne${idx}`">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#flush-collapseOne${idx}`" aria-expanded=false 
                        :aria-controls="`flush-collapseOne${idx}`"> {{ faq.question }}
                </button>
              </h2>
              <div :id="`flush-collapseOne${idx}`" 
              class="accordion-collapse collapse" :class="faq.expanded ? 'show':''"
              :aria-labelledby="`flush-headingOne${idx}`"
                   data-bs-parent="#faqTopics">
                <div class="accordion-body">{{ faq.answer }}</div>
              </div>
            </div>
</template>
<script>


export default  {
    name: 'faqItem',
    props: ['faq', 'idx']
    }
</script>
