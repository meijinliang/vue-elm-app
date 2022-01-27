import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/person')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
