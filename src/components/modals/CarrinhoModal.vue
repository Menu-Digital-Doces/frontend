<script setup>
import Pedidos from '@/pages/pedidos/Pedidos.vue';
import FundoModal from './FundoModal.vue';

const { toggleCart } = defineProps({toggleCart: Function})

</script>

<template>
    <FundoModal @click="toggleCart()"></FundoModal>
    <div id="container-modal-carrinho" class="box-modal">
        <Pedidos v-bind:prop-page-pedidos=true></Pedidos>
        <a href="#" class="btn-close" id="btn-close-modal" @click.prevent="toggleCart()">X</a>
        <p>ou</p>
        <a href="#" class="link" id="link-pagina-carrinho"><RouterLink to="carrinho"> ir para a página do carrinho</RouterLink></a>
    </div>
</template>

<style lang="scss">
    #container-modal-carrinho{
        top: 80px;
        right: 60px;
        width: 500px;
        height: 600px;

        #pedidos{
            overflow-y: auto;
        }

        #pedidos::-webkit-scrollbar{
            display: none;
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
            padding: 0;

            

            .item-pedido{
                padding: 8px;
            }

            #pedidos{
                width: 100%;
                padding-bottom: 0;
            }

            #pedido-finalizar-btn{
                margin-bottom: 16px;
            }

            #link-pagina-carrinho{
                margin-top: 16px;
            }
        }
    }

    
</style>