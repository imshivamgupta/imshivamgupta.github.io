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
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: '404 Not Found'
      }
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

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Shivam's Portfolio`
  next()
})

export default router
