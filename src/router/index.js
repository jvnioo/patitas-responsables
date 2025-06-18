import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GaleriaView from '../views/GaleriaView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cuidados',
    name: 'Cuidados',
    component: () => import('../views/Cuidados.vue')
  },
  {
    path: '/adiestramiento',
    name: 'Adiestramiento',
    component: () => import('../views/Adiestramiento.vue')
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: GaleriaView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 