import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/Home')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login')
    },
    {
      path: '/newComponent',
      name: 'newComponent',
      component: () => import('@/views/NewComponent')
    },
    {
      path: '/apply',
      name: 'apply',
      component: () => import('@/views/apply')
    },
    {
      path: '/choice',
      name: 'choice',
      component: () => import('@/views/Choice')
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('@/views/Chart')
    }
  ]
})
