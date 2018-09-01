import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'
import Vuetify from 'vuetify'
import LightBootstrap from './light-bootstrap-main'

let app

Vue.prototype.$http = axios
// plugin setup

Vue.use(LightBootstrap)
Vue.use(Vuetify)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      store,
      render: h => h(App),
      router
    })
  }
})
