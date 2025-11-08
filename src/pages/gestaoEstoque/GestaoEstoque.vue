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
        console.log(response.data)
        infoStatus.value.zerados = response.data.filter(pedido => pedido.estoque.quantidade === 0).length
        
        infoStatus.value.total_estoque = response.data.reduce((total, item) => {
            const quantidade = parseFloat(item.estoque.quantidade) || 0;
            const preco = parseFloat(item.preco) || 0;
            
            // Multiplica a quantidade pelo preço do item atual
            const itemTotal = quantidade * preco;
            
            // Adiciona ao total acumulado
            return total + itemTotal;

        }, 0); // Inicia o total acumulado em 0
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