import Carrinho from '@/pages/carrinho/Carrinho.vue'
import Catalogo from '@/pages/catalogo/Catalogo.vue'
import FinalizarCompra from '@/pages/finalizarCompra/FinalizarCompra.vue'
import Home from '@/pages/home/Home.vue'
import Pedidos from '@/pages/pedidos/Pedidos.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: Home},
    {path: '/catalogo', component: Catalogo},
    {path: '/finalizar-pedido', component: FinalizarCompra},
    {path: '/meus-pedidos', component: Pedidos},
    {path: '/carrinho', component: Carrinho},
    {path: '/:pathMatch(.*)*', component: Home} /* Endereço não encontrado */
  ],
})

export default router
