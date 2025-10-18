<script setup>
import CardPedido from '@/components/pedidos/CardPedido.vue';
import ItemPedido from '@/components/pedidos/ItemPedido.vue';
import { ref } from 'vue';


const propPagePedidos = defineProps({propPagePedidos: Boolean})
var statePagePedidos = ref(propPagePedidos.propPagePedidos); /* true: página carrinho aberto | false: página carrinho finalizado */

</script>

<template>
    <div class="container" id="pedidos">
        <!-- <h1 class="titulo" id="titulo-pedidos">Pedidos realizados</h1> -->
        <h1 class="titulo" id="titulo-pedidos">Pedido nº 012345</h1>
        <hr>
        <!-- <div id="pedidos">
            <CardPedido></CardPedido>
            <CardPedido></CardPedido>
            <CardPedido></CardPedido>
            <CardPedido></CardPedido>

        </div> -->
        <div id="pedido">
            <ItemPedido v-bind:prop-state-pedido=true></ItemPedido>
            <ItemPedido v-bind:prop-state-pedido=false></ItemPedido>
            <ItemPedido v-bind:prop-state-pedido=true></ItemPedido>
            

        </div>
        <hr class="divisor">
        <p id="pedido-subtotal">Subtotal <span>R$00</span></p>

        <a href="#" class="btn" id="pedido-finalizar-btn" v-show="statePagePedidos">Finalizar pedido</a>
        
    </div>
</template>

<style lang="scss">
    #pedidos{
        @include flex(column, start, start);

        #titulo-pedidos{
            font-weight: bold;
            color: $marrom-escuro;
            font-size: clamp(1rem, 6vw, 2rem);
            margin-bottom: 8px;
        }
    
        #pedidos, #pedido{
            padding-top: 30px;
            @include flex(column, center, center);
            gap: 30px; 
        }
    
        .divisor{
            background-color: red;
            margin-top: 80px;
            margin-bottom: 16px;
        }

        #pedido-subtotal{
            width: 100%;
            @include flex(row, space-between, center);
            font-weight: bold;
            padding: 0 24px;
        
            span{
                font-weight: bold;
            }
        }

        #pedido-finalizar-btn{
            border: 2px solid $rosa-escuro;
            color: $rosa-escuro;
            align-self: center;
            margin: 40px 0 20px 0;
        }
    }
</style>