import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/auth'

let app
let config = {
  apiKey: 'AIzaSyDPgZh1kgW2oaP1WMa9CDFumtvf-oQBVok',
  authDomain: 'web4partners.firebaseapp.com',
  databaseURL: 'https://web4partners.firebaseio.com',
  projectId: 'web4partners',
  storageBucket: '',
  messagingSenderId: '431503121350'
}

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

Vue.prototype.$http = axios
// plugin setup

Vue.use(LightBootstrap)

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      store,
      render: h => h(App),
      router
    })
  }
})
