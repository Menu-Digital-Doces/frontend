
<script setup>
import CardPedido from '@/components/pedidos/CardPedido.vue';
import ItemPedido from '@/components/pedidos/ItemPedido.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
 
const propPagePedidos = defineProps({propPagePedidos: Boolean})
var statePagePedidos = ref(propPagePedidos.propPagePedidos); /* true: página carrinho aberto | false: página carrinho finalizado */

const actualRote3 = useRoute()
const orderId3 = ref(actualRote3.params.orderId)
const orderData3 = ref()

onMounted(() => {
    axios.request({
        method: 'GET',
        url: `/pedidos/${orderId3.value}`,
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => {
        orderData3.value = response.data
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
})

</script>

<template>
    <div class="container" id="pedidos" v-if="orderData3">
        <h1 class="titulo" id="titulo-pedidos">{{ orderData3.codigo }}</h1>
        <hr>
        <div id="pedido">
        <div class="item-pedido">
            <img src="../../assets/1 - bolo de banana.png"/>
            <div class="direita">
            <div class="topo">
                <h6>{{orderData3.nome}}</h6>
            </div>
            <p class="meio item-pedido-descricao">{{ orderData3.descricao }}</p>
            <p class="meio">Estoque: {{ orderData3.quantidade }}</p>
            <div class="baixo">
                <p class="quantidade">Quantidade: {{ orderData3.quantidade }}</p>
                <h6>R${{ orderData3.preco }}</h6>
            </div>
        </div>
        </div>
        </div>
        <hr class="divisor">
        <p id="pedido-subtotal">Subtotal <span>R$00</span></p>

        <a href="#" class="btn" id="pedido-finalizar-btn" v-show="statePagePedidos">Finalizar pedido</a>
        
    </div>
</template>

<style lang="scss">
    #pedidos{
        width: 100%;
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
            width: 100%;
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
</style> -->