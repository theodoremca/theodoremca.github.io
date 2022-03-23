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
import themeSwitcher from './themeSwitcher'
import contact from './contact'

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
    faq,
    themeSwitcher,
    contact,
  }
})
