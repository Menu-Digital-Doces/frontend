<script setup>
import ItemPedido from '@/components/pedidos/ItemPedido.vue';
import { computed, onMounted, reactive, ref } from 'vue';

const cart = ref([])
const filteredCart = computed(() =>
  cart.value.filter(product => verifyProductState(product.id))
);

const activeProductsInCart = reactive({
  '1': true, 
  '2': false, 
  '3': false, 
  '4': false, 
  '5': true, 
  '6': false, 
  '7': false
})

onMounted(() => {
  const localCartString = localStorage.getItem('cart');  
  const localCart = JSON.parse(localCartString || '[]');
  cart.value = Array.isArray(localCart) ? localCart : [];
})

function removeItemFromCart(id){
    const actualCart = JSON.parse(localStorage.getItem('cart') || "[]")
    const newCart = actualCart.filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart))
    activeProductsInCart[id] = false;
  }
  
  function verifyProductState(id){
    return !!activeProductsInCart[id];
  }

</script>

<template>
  <div class="container" id="container-carrinho">
    <h1>Carrinho</h1>  
    <hr>
    <ItemPedido v-for="productData in filteredCart" :key="productData.id" v-bind:="{propStatePedido: true, productData: productData, removeItemFromCart: removeItemFromCart}"></ItemPedido>
    <a href="" class="btn"><RouterLink to="finalizar-pedido">Confirmar</RouterLink></a>
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

