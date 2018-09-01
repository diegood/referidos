import Vue from 'vue'
import Vuex from 'vuex'
// import { firebaseMutations } from 'vuexfire'
import SystemStatus from './modules/systemStatus'
import UserReferer from './modules/userReferer'
import Contactos from './modules/contactos'
import UserSystem from './modules/userSystem'
import firebase from './../firebaseConfig'

Vue.use(Vuex)
Vue.use(firebase)

export default new Vuex.Store({
  modules: {
    SystemStatus,
    UserReferer,
    Contactos,
    UserSystem
  }
})
