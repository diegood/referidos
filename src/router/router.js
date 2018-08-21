import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'
import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// 404
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

import General from 'src/components/Dashboard/Views/General.vue'
import UserReferer from 'src/components/Dashboard/Views/UserReferer.vue'
import RefererList from 'src/components/Dashboard/Views/RefererList.vue'
import Login from 'src/components/Auth/Login.vue'
import Register from 'src/components/Auth/Register.vue'

Vue.use(Router)

let router = new Router({
  linkActiveClass: 'nav-item active',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: Register
    },
    {
      path: '/referidos',
      component: DashboardLayout,
      redirect: '/referidos/general',
      children: [
        {
          path: 'general',
          name: 'General',
          component: General
        },
        {
          path: 'referido',
          name: 'referer',
          component: UserReferer
        },
        {
          path: 'lista-referidos',
          name: 'Lista de referidos',
          component: RefererList
        }
      ]
    },
    { path: '*', component: NotFound }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router
