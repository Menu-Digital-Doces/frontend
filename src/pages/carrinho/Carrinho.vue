<script setup>
import ItemPedido from '@/components/pedidos/ItemPedido.vue';
import { useCart } from '@/general/useCart';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';



const { changeActiveComponent } = defineProps({changeActiveComponent: Function})

const isModal = !(useRoute().path === '/carrinho')

const { 
  cart, 
  filteredCart, 
  loadCart, 
  removeItemFromCart, 
  increaseQuantity, 
  decreaseQuantity 
} = useCart()

const totalCart = computed(() => {
  return filteredCart.value.reduce((total, product) => {
    return total + (product.preco * product.quantidadeDesejada)
  }, 0)
})

onMounted(() => {
  loadCart()
})

</script>

<template>
  <div class="container" id="pagina-carrinho">
    <h1 class="titulo-pagina">Carrinho</h1>  
    <hr class="divisor-pagina">
    <div class="lista-itens-carrinho">
        <!-- <ItemPedido v-for="productData in filteredCart" :key="productData.id" v-bind:="{propStatePedido: true, productData: productData, removeItemFromCart: removeItemFromCart}"></ItemPedido> -->
        <ItemPedido v-for="productData in filteredCart" :key="productData.id" v-bind:="{propStatePedido: true, productData: productData, removeItemFromCart: removeItemFromCart, increaseQuantity: increaseQuantity, decreaseQuantity: decreaseQuantity}"></ItemPedido>
        <p v-if="cart.length===0" id="notOrder">Não há itens no carrinho</p>
      </div>
    <div v-if="cart.length!==0" class="resumo-carrinho">
        <p class="subtotal">Subtotal: <span>R$ {{ totalCart.toFixed(2) }}</span></p>
        <RouterLink :to="{name: 'finalizar-pedido'}" class="btn-btn">Finalizar pedido</RouterLink>
        <p v-if="isModal">ou</p>
        <RouterLink :to="{name: 'carrinho'}" v-if="isModal" href="#" class="link" id="link-pagina-carrinho" @click="changeActiveComponent()"> ir para a página do carrinho</RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
    #pagina-carrinho{
        @include flex(column, start, start);
        width: 100%;
        padding-top: 30px;
        padding-bottom: 64px;

        .titulo-pagina {
          margin-bottom: 10px;
          font-weight: bold;
          color: var(--marrom-escuro);
          font-size: clamp(1rem, 6vw, 2rem);

        }

        .divisor-pagina{
            border: 0;
            height: 1px;
            background-color: var(--cinza-claro);
            margin-bottom: 20px;
        }

        .lista-itens-carrinho{
            width: 100%;
            @include flex(column, start, start);
            gap: 15px;
            margin-bottom: 30px;
            min-height: calc(100vh - 240px);

        }

        .resumo-carrinho{
            width: 100%;
            @include flex(column, center, center);
            gap: 15px;
            border-top: 1px solid var(--cinza-claro);


            .subtotal{
                font-size: 18px;
                font-weight: bold;
                color: var(--marrom-escuro);
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 40px;

                span{
                    color: var(--rosa-escuro);
                }
            }

            
        }

       

        #notOrder{
          color: var(--cinza-claro);
        }
    }
</style>

