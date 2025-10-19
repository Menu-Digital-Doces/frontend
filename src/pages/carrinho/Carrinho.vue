<script setup>
import ItemPedido from '@/components/pedidos/ItemPedido.vue';


</script>

<template>
  <div class="container" id="container-carrinho">
    <h1>Carrinho</h1>  
    <hr>
    <ItemPedido v-bind:prop-state-pedido=true></ItemPedido>
    <ItemPedido v-bind:prop-state-pedido=true></ItemPedido>
    <ItemPedido v-bind:prop-state-pedido=true></ItemPedido>
    <ItemPedido v-bind:prop-state-pedido=true></ItemPedido>

  </div>
</template>

<style lang="scss">
    #container-carrinho{
        @include flex(column, start, start);
        width: 100%;
        height: 100vh; /* rever */

        h1 {
          margin-bottom: 10px;
          font-weight: bold;
          color: $marrom-escuro;
          font-size: clamp(1rem, 6vw, 2rem);
        }
        
    }
</style>

