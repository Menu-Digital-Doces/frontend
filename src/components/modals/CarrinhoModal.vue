<script setup>
import FundoModal from './FundoModal.vue';
import { onMounted } from 'vue';
import Carrinho from '@/pages/carrinho/Carrinho.vue';

const { changeActiveComponent } = defineProps({changeActiveComponent: Function})

</script>

<template>
    <FundoModal @click="changeActiveComponent()"></FundoModal>
    <div id="container-modal-carrinho" class="box-modal">
        <Carrinho></Carrinho>
        <a href="#" class="btn-close" id="btn-close-modal" @click.prevent="changeActiveComponent()">X</a>
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