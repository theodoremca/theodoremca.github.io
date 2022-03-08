import { createStore } from 'vuex'
import services from './services'
import about from './about'

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
    about
  }
})
