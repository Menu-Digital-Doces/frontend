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
import PedidosView from '@/pages/pedidos/PedidosView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: Home, meta: {bodyClass: 'active'}},
    {path: '/catalogo', component: Catalogo, meta: {bodyClass: 'active'}},
    {path: '/finalizar-pedido', component: FinalizarCompra},
    {path: '/meus-pedidos', component: Pedidos},
    {path: '/meus-pedidos/:orderId', component: PedidosView, name: 'pedido'},
    {path: '/carrinho', component: Carrinho},
    {path: '/painel-do-admin/login', component: LoginAdm, meta: {bodyClass: 'active'}},
    {path: '/painel-do-admin/gestao-de-pedidos', component: GestaoPedidos, meta: {bodyClass: 'menuADM'}, name: 'gestao-de-pedidos'},
    {path: '/painel-do-admin/gestao-de-estoque', component: GestaoEstoque, meta: {bodyClass: 'menuADM'}, name: 'gestao-de-estoque'},
    {path: '/painel-do-admin/pedido/:orderId', component: GestaoVerPedido, name: 'pedidoADM', meta: {bodyClass: ['active', 'menuADM']}},
    {path: '/painel-do-admin/cliente/:cliente', component: GestaoVerCliente, name: 'pedidosADM', meta: {bodyClass: 'menuADM'}},
    {path: '/:pathMatch(.*)*', component: Home} /* Endereço não encontrado */
  ],
})

router.beforeEach((to, from, next) => {
  // --- Lógica Corrigida no getClasses ---
  const getClasses = (route) => {
    // 1. Acessa bodyClass dentro de meta. Se meta ou bodyClass for null, retorna null.
    const classes = route.meta ? route.meta.bodyClass : null; 
    
    if (!classes) return []; // Se for null ou undefined, retorna vazio.
    if (Array.isArray(classes)) return classes;
    return [classes]; // Transforma string em array para uso com o spread.
  };

  const previousClasses = getClasses(from);
  const nextClasses = getClasses(to);

  // 1. **Remover** as classes da rota anterior
  if (previousClasses.length) {
    document.body.classList.remove(...previousClasses); 
  }

  // 2. **Adicionar** as classes da nova rota
  if (nextClasses.length) {
    document.body.classList.add(...nextClasses);
  }

  next();
});

export default router
