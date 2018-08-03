import Vue from 'vue'
import Vuex from 'vuex'
import UserReferer from './modules/userReferer'
import Contactos from './modules/contactos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserReferer,
    Contactos
  }
})
