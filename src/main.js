import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'
import VueFire from 'vuefire'
import 'firebase/auth'
import 'firebase/database'
import LightBootstrap from './light-bootstrap-main'

let app
let config = {
  apiKey: 'AIzaSyDPgZh1kgW2oaP1WMa9CDFumtvf-oQBVok',
  authDomain: 'web4partners.firebaseapp.com',
  databaseURL: 'https://web4partners.firebaseio.com',
  projectId: 'web4partners',
  storageBucket: 'web4partners.appspot.com',
  messagingSenderId: '431503121350'
}
Vue.prototype.$http = axios
// plugin setup

Vue.use(LightBootstrap)
Vue.use(VueFire)

firebase.initializeApp(config)
Vue.prototype.$firebase = firebase
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
