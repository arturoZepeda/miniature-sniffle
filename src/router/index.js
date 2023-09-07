import { createRouter, createWebHistory } from 'vue-router'
import clientes from '../views/ClientesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: clientes
    },
    {
      path: '/agregarCliente',
      name: 'agregar-cliente',
      component: () => import('../views/NuevoClienteView.vue')
    }
  ]
})

export default router
