import { createStore } from 'vuex'
import services from './services'
import about from './about'
import testimonial from './testimonial'
import resume from './resume'
import experience from './experience'
import skills from './skills'
import portfolio from './portfolio'
import portfolioTags from './portfolioTags'
import faq from './faq'

export default createStore({
  namespace:true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    services,
    about,
    testimonial,
    resume,
    experience,
    skills,
    portfolio,
    portfolioTags,
    faq
  }
})
