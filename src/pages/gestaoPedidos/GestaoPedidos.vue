<script setup>
import Baixo from '@/components/gestaoPedidos/Baixo.vue';
import Topo from '@/components/gestaoPedidos/Topo.vue';
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';

let data = ref([])
const infoStatus = ref({
    'pendentes': 0,
    'em_producao': 0,
    'entregue': 0,
})

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
        infoStatus.value.pendentes = response.data.filter(pedido => pedido.status === 'Pendente').length
        infoStatus.value.em_producao = response.data.filter(pedido => pedido.status === 'Confirmado').length
        infoStatus.value.entregue = response.data.filter(pedido => pedido.status === 'Entregue').length

        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
})


</script>

<template>
    <div class="container" id="wrapper-gestao-pedidos">
        <Topo v-bind:data="infoStatus"></Topo>
        <Baixo v-bind:data="data"></Baixo>
    </div>
</template>

<style lang="scss">
    #pagina-gestao{
        @include flex(column, start, start);
        width: 100%;
        padding-top: 30px;

        .titulo-pagina {
          margin-bottom: 10px;
          font-weight: bold;
          color: var(--marrom-escuro);
          font-size: clamp(1.5rem, 6vw, 2.5rem);
        }

        .divisor-pagina{
            border: 0;
            height: 1px;
            background-color: var(--cinza-claro);
            margin-bottom: 30px;
        }

        .boxes-gestao{
            @include flex(row, space-between, center);
            width: 100%;
            gap: 100px;
            flex-wrap: wrap;
            margin-bottom: 40px;

            @media (max-width: 768px) {
                justify-content: center;
            }
        }

        .titulo-secao-gestao{
            font-size: 20px;
            font-weight: bold;
            color: var(--rosa-escuro);
            margin-top: 20px;
        }
    }
</style>