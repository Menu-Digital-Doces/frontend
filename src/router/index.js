import Carrinho from '@/pages/carrinho/Carrinho.vue'
import Catalogo from '@/pages/catalogo/Catalogo.vue'
import FinalizarCompra from '@/pages/finalizarCompra/FinalizarCompra.vue'
import GestaoEstoque from '@/pages/gestaoEstoque/GestaoEstoque.vue'
import GestaoPedidos from '@/pages/gestaoPedidos/GestaoPedidos.vue'
import GestaoVerCliente from '@/pages/gestaoVerCliente/GestaoVerCliente.vue'
import GestaoVerPedido from '@/pages/gestaoVerPedido/GestaoVerPedido.vue'
import Home from '@/pages/home/Home.vue'
import LoginAdm from '@/pages/loginAdm/LoginAdm.vue'
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
    {path: '/painel-do-admin/login', component: LoginAdm},
    {path: '/painel-do-admin/gestao-de-pedidos', component: GestaoPedidos},
    {path: '/painel-do-admin/gestao-de-estoque', component: GestaoEstoque},
    {path: '/painel-do-admin/pedido/0123456', component: GestaoVerPedido},
    {path: '/painel-do-admin/cliente/', component: GestaoVerCliente},
    {path: '/:pathMatch(.*)*', component: Home} /* Endereço não encontrado */
  ],
})

export default router
