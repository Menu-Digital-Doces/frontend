<script setup>
import CardPedido from '@/components/pedidos/CardPedido.vue';
import ItemPedido from '@/components/pedidos/ItemPedido.vue';
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';


// const propPagePedidos = defineProps({propPagePedidos: Boolean})
// var statePagePedidos = ref(propPagePedidos.propPagePedidos); /* true: página carrinho aberto | false: página carrinho finalizado */

const data = ref([])

onMounted(() => {
    axios.request({
        method: 'GET',
        url: '/pedidos',
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => {
        data.value = response.data
    })
    .catch(error => {
        console.log(error)
    })
})


</script>

<template>
    <div class="container" id="pagina-pedidos" v-if="data">
        <h1 class="titulo-pagina">Meus pedidos</h1>
        <hr class="divisor-pagina">
        <div class="lista-pedidos">
            <CardPedido v-for="pedido in data" v-bind:="{data: pedido}" :key="pedido.id"></CardPedido>
        </div>
    </div>
</template>

<style lang="scss">
    #pagina-pedidos{
        width: 100%;
        @include flex(column, start, start);
        padding-top: 50px;

        .titulo-pagina{
            font-weight: bold;
            color: $marrom-escuro;
            font-size: 32px;
            margin-bottom: 10px;
        }

        .divisor-pagina{
            border: 0;
            height: 1px;
            background-color: $cinza-claro;
            margin-bottom: 20px;
        }
    
        .lista-pedidos{
            width: 100%;
            @include flex(column, center, center);
            gap: 50px; 
            padding-bottom: 30px;
        }
    }
</style>