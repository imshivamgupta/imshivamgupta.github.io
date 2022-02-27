import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Homepage'
import NotFound from '@/view/Error/NotFound'
import Services from '@/view/Services'

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: '404'
    },
    {
      path: '/work',
      name: 'Services',
      component: Services
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/view/About/index.vue')
    }
  ]
})

export default router
