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




  var StateModalAvisos = ref(false);

  function toggleAvisos(){
      StateModalAvisos.value = !StateModalAvisos.value;
  }

</script>

<template>
  <Nav></Nav>

  <!-- <Home></Home> -->

  <!-- Modais -->
  <CentralDoUsuario v-if="StateModalAvisos"></CentralDoUsuario> <!-- Criar variavel própria depois -->
  <!-- <Login></Login> -->
  <!-- <Cadastro></Cadastro> -->
  <!-- <Avisos v-if="StateModalAvisos"></Avisos> -->

  <!-- <AlertaPagamento></AlertaPagamento> Provisório aqui -->



  <!--  -->
  <!-- <FinalizarCompra></FinalizarCompra> -->
  <!-- <Pedidos v-bind:prop-page-pedidos=true></Pedidos> -->

  <!-- <CarrinhoModal></CarrinhoModal> -->

  <!-- <Catalogo></Catalogo> -->


  <Footer></Footer>
</template>

<style lang="scss">



</style>
