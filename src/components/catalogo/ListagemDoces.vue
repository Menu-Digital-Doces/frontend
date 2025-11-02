<script setup>
import { onMounted, ref } from 'vue';
import Card from './Card.vue';

import axios from 'axios';

let data = ref()


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
    })
    .catch(error => {
        console.log(error)
    })
})


</script>

<template>
    <div class="container" id="listagem-doces">
        <div class="container-categoria">
            <h3 class="titulo-categoria">Doces</h3>
            <hr class="divisor-categoria">
            <div class="wrapper-cards">
                <Card v-for="productData in data" v-bind:productData="productData" :key="productData.id"></Card>
                <Card v-for="productData in data" v-bind:productData="productData" :key="productData.id"></Card>
                <Card v-for="productData in data" v-bind:productData="productData" :key="productData.id"></Card>
                <Card v-for="productData in data" v-bind:productData="productData" :key="productData.id"></Card>
            </div>
        </div>
        <div class="container-categoria">
            <h3 class="titulo-categoria">Bolos</h3>
            <hr class="divisor-categoria">
            <div class="wrapper-cards">
                <Card v-for="productData in data" v-bind:productData="productData" :key="productData.id"></Card>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    #listagem-doces{
        width: 100%;
        @include flex (column, center, start);
        gap: 48px; /* Espaçamento entre as categorias */


        .container-categoria{
            @include flex (column, center, start);
            width: 100%;

            .titulo-categoria{
                margin-bottom: 8px;
                color: $marrom-escuro;
                font-size: 24px;
                font-weight: bold;
            }

            .divisor-categoria{
                border: 0;
                height: 2px;
                background-color: $cinza-escuro;
                margin-bottom: 16px;
            }
            
            
            .wrapper-cards{
                width: 100%;
                @include flex(row, center, stretch); /* Alinhamento centralizado e altura esticada */
                flex-wrap: wrap;
                padding: 32px 0;
                gap: 32px; /* Espaçamento entre os cards */

                /* Responsividade */
                @media (min-width: 1200px){
                    justify-content: space-between; /* Distribui o espaço em telas maiores */
                }
                
                @media (max-width: 640px){
                    justify-content: center; /* Centraliza em telas muito pequenas */
                }
            }
        }
    }
</style>