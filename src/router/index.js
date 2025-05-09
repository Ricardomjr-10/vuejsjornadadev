import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/aula_17',
    name: 'router',
    component: () => import('../components/Aula_17.vue')
  },
  {
    path: '/aula_18',
    name: 'router2',
    component: () => import('../components/Aula_18.vue')
  },
  {
    path: '/aula_19',
    name: 'vuex',
    component: () => import('../components/Aula_19.vue')
  },
  {
    path: '/aula_20',
    name: 'vuex-mutations',
    component: () => import('../components/Aula_20.vue')
  },
  {
    path: '/aula_21',
    name: 'vuex-mutations2',
    component: () => import('../components/Aula_21.vue')
  },
  {
    path: '/aula_22',
    name: 'vuex-getter',
    component: () => import('../components/Aula_22.vue')
  },
  {
    path: '/aula_23',
    name: 'vuex-actions',
    component: () => import('../components/Aula_23.vue')
  },
  {
    path: '/aula_24',
    name: 'composition api setup',
    component: () => import('../components/Aula_24.vue')
  },
  {
    path: '/aula_25',
    name: '/composition api reactive',
    component: () => import('../components/Aula_25.vue')
  },
  {
    path: '/aula_26',
    name: '/composition api computed watch',
    component: () => import('../components/Aula_26.vue')
  },
  {
    path: '/aula_27',
    name: 'hooks',
    component: () => import('../components/Aula_27.vue')
  },
  {
    path: '/aula_28',
    name: 'hooks',
    component: () => import('../components/Aula_28.vue')
  },
  {
    path: '/servico',
    name: 'servico',
    component: () => import('../views/ServicoView.vue')
  },
  {
    path: '/usuarios/:id',
    name: 'usuarios-editar',
    component: () => import('../views/UserEditView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
