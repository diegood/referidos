import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyA8M52mPAQgl0le954ZGf_0DbNiXkun4UQ',
  authDomain: 'referidos-1529174622771.firebaseapp.com',
  databaseURL: 'https://referidos-1529174622771.firebaseio.com',
  projectId: 'referidos-1529174622771',
  storageBucket: '',
  messagingSenderId: '819641893611'
}

firebase.initializeApp(config)

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'

Vue.prototype.$http = axios
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
