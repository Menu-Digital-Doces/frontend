<script setup>
import Baixo from '@/components/gestaoEstoque/Baixo.vue';
import Topo from '@/components/gestaoEstoque/Topo.vue';
import GestaoEditarItem from '@/components/modals/GestaoEditarItem.vue';

import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';

let data = ref([])
const infoStatus = ref({
    'zerados': 0,
    'total_estoque': 0,
})

onMounted(() => {
    axios.request({
        method: 'GET',
        url: '/produtos',
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => {
        data.value = response.data
        infoStatus.value.zerados = response.data.filter(pedido => pedido.quantidade === 0).length
        // infoStatus.value.total_estoque += response.data.filter(pedido => pedido.quantidade !== 0).length
    })
    .catch(error => {
        console.log(error)
    })
})

function resetData(){
    axios.request({
        method: 'GET',
        url: '/produtos',
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
}



</script>

<template>
    <!-- <GestaoEditarItem></GestaoEditarItem> -->
    <div class="container" id="gestao-de-estoque">
        <Topo v-bind:data="infoStatus"></Topo>
        <Baixo v-bind:="{data, resetData: resetData}"></Baixo>
    </div>
</template>

<style lang="scss">
#gestao-de-estoque{
        /* background-color: beige; */
}
</style>