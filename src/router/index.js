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
