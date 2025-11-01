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
        infoStatus.value.em_producao = response.data.filter(pedido => pedido.status === 'Em producao').length
        infoStatus.value.entregue = response.data.filter(pedido => pedido.status === 'Entregue').length
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
    #wrapper-gestao-pedidos{
        /* background-color: #f7f7f1; */

    }

</style>