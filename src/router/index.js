import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/ListComponent'),
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('../components/CreateComponent'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditComponent'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router