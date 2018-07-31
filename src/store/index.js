import Vue from 'vue'
import Vuex from 'vuex'
import contacto from './modules/userReferer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    contacto
  }
})
