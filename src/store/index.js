import Vue from 'vue'
import Vuex from 'vuex'
// import { firebaseMutations } from 'vuexfire'
import UserReferer from './modules/userReferer'
import Contactos from './modules/contactos'
import firebase from './../firebaseConfig'

Vue.use(Vuex)
Vue.use(firebase)

export default new Vuex.Store({
  modules: {
    UserReferer,
    Contactos
  }
})
