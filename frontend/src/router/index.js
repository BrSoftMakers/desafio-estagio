import { createRouter, createWebHashHistory } from 'vue-router'
import Lista from '@/views/lista'
import Cadastro from '@/views/cadastro'
import Editar from '@/views/Editar'

const routes = [
  {
    path: '/',
    name: 'Listar',
    component: Lista
  },
  {
    path: '/cadastro',
    name: 'Cadastrar',
    component: Cadastro
  },
  {
    path: '/editar',
    name: 'Editar',
    component: Editar
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
