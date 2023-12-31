import { createRouter, createWebHistory } from 'vue-router'
import clientes from '../views/ClientesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listado-clientes',
      component: clientes,
      props: {titulo: 'Clientes'}
    },
    {
      path: '/agregarCliente',
      name: 'agregar-cliente',
      props: {titulo: 'Agregar Cliente'},
      component: () => import('../views/NuevoClienteView.vue')
    },
    {
      path: '/editarCliente/:id',
      name: 'editar-cliente',
      props: {titulo: 'Editar Cliente'},
      component: () => import('../views/EditarClienteView.vue')
    }
  ]
})

export default router
