<script setup>
import FundoModal from './FundoModal.vue';
import { onMounted } from 'vue';
import Carrinho from '@/pages/carrinho/Carrinho.vue';

const { changeActiveComponent } = defineProps({changeActiveComponent: Function})

</script>

<template>
    <FundoModal @click="changeActiveComponent()"></FundoModal>
    <div id="container-modal-carrinho" class="box-modal">
        <Carrinho v-bind:is-modal="true"></Carrinho>
        <a href="#" class="btn-close" id="btn-close-modal" @click.prevent="changeActiveComponent()">X</a>
        
    </div>
</template>

<style lang="scss">
    #container-modal-carrinho{
        top: 100px;
        right: 60px;
        width: 500px;
        height: calc(100vh - 60px - 80px);
        z-index: 10;
        padding-top: 0;

        #pagina-carrinho{
            overflow-y: auto;
            height: auto;
            
            .lista-itens-carrinho{
                height: 500px;
                background-color: red;
                overflow-y: a;
            }
        }

        #pagina-carrinho::-webkit-scrollbar{
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

            #pagina-carrinho{
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