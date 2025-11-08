<script setup>
import FundoModal from './FundoModal.vue';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import ItemPedido from '../pedidos/ItemPedido.vue';
import { useCart } from '@/general/useCart';


const { changeActiveComponent } = defineProps({changeActiveComponent: Function})

const { 
  cart, 
  filteredCart, 
  loadCart, 
  removeItemFromCart, 
  increaseQuantity, 
  decreaseQuantity 
} = useCart()

onMounted(() => {
  loadCart()
})

</script>

<template>
    <FundoModal @click="changeActiveComponent()"></FundoModal>
    <div id="container-modal-carrinho" class="box-modal">
        <div class="modal-wrapper-top">
            <h1 class="titulo-pagina">Carrinho</h1>  
            <hr class="divisor-pagina">
            
            <a href="#" class="btn-close" id="btn-close-modal" @click.prevent="changeActiveComponent()">X</a>
        </div>
        <div class="lista-itens-carrinho">
            <ItemPedido 
                v-for="productData in filteredCart" 
                :key="productData.id" 
                v-bind:="{
                    propStatePedido: true, 
                    productData: productData, 
                    removeItemFromCart: removeItemFromCart,
                    increaseQuantity: increaseQuantity,
                    decreaseQuantity: decreaseQuantity
                }">
            </ItemPedido>
            <p v-if="cart.length===0" id="notOrder">Não há itens no carrinho</p>
        </div>
        <div v-if="cart.length > 0" class="modal-wrapper-bottom">
            <RouterLink :to="{name: 'finalizar-pedido'}" href="" class="btn-btn" @click="changeActiveComponent()">Finalizar pedido</RouterLink>
            <p>ou</p>
            <RouterLink :to="{name: 'carrinho'}" class="link" @click="changeActiveComponent()">ir para a página do carrinho</RouterLink>
        </div>
        
    </div>
</template>

<style lang="scss">
    #container-modal-carrinho{
        z-index: 11;
        top: 100px;
        right: 60px;
        width: 500px;
        height: calc(100vh - 60px - 80px);
        z-index: 10;
        padding-top: 25px;
        @include flex(column, start, start);
        gap: 20px;

        .modal-wrapper-top{
            width: 100%;

       
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
            }
        }

        .lista-itens-carrinho{
            @include flex(column, start, start);
            min-height: calc(100% - 190px);
            overflow-y: auto;
            gap: 20px;
            padding: 0 8px 8px 0;
            width: 100%;
            
        }

        .modal-wrapper-bottom{
            width: 100%;
            @include flex(column, center, center);
            height: 150px;

            p{
                margin: 20px 0 20px 0;
              
            }
        }

        #btn-close-modal{
            position: absolute;
            top: 36px;
            right: 10px;
        }

        @media (max-width: 768px){
            width: 90%;
            inset: 0;
            margin: auto;
            top: 60px;

        }
    }

    
</style>