<script setup>

import { ref } from 'vue';
import Nav from "@/components/nav/Nav.vue";
import Avisos from './components/modals/Avisos.vue';
import Home from './pages/home/Home.vue';
import Footer from "@/components/footer/Footer.vue";
import CentralDoUsuario from './components/modals/CentralDoUsuario.vue';
import Login from './components/modals/Login.vue';
import Cadastro from './components/modals/Cadastro.vue';
import AlertaPagamento from './components/modals/AlertaPagamento.vue';
import FinalizarCompra from './pages/finalizarCompra/FinalizarCompra.vue';
import Pedidos from './pages/pedidos/Pedidos.vue';
import CarrinhoModal from './components/modals/CarrinhoModal.vue';
import Catalogo from './pages/catalogo/Catalogo.vue';
import { useTheme } from './general/useTheme';




  useTheme()

</script>

<template>
  <Nav></Nav>

    <RouterView></RouterView>

  <Footer></Footer>
</template>

<style lang="scss">



</style>
