import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewSignup from '@/components/NewSignup'
import EditSignup from '@/components/EditSignup'
import ViewSignup from '@/components/ViewSignup'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-signup',
      component: NewSignup
    },
    {
      path: '/edit/:signup_id',
      name: 'edit-signup',
      component: EditSignup
    },
    {
      path: '/:signup_id',
      name: 'view-signup',
      component: ViewSignup
    }
    
    
  ]
})
