import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// 404
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

import General from 'src/components/Dashboard/Views/General.vue'
import UserReferer from 'src/components/Dashboard/Views/UserReferer.vue'
import RefererList from 'src/components/Dashboard/Views/RefererList.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/general'
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/general',
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

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
