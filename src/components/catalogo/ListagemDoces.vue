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
        <div class="container-cards">
            <h3>Doces</h3>
            <hr>
            <div class="wrapper-cards">
                <Card v-for="productData in data" v-bind:productData="productData" :key="productData.id"></Card>
                <Card v-for="productData in data" v-bind:productData="productData" :key="productData.id"></Card>
                <Card v-for="productData in data" v-bind:productData="productData" :key="productData.id"></Card>
                <Card v-for="productData in data" v-bind:productData="productData" :key="productData.id"></Card>
            </div>
        </div>
        <div class="container-cards">
            <h3>Bolos</h3>
            <hr>
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
        gap: 64px;


        .container-cards{
            @include flex (column, center, start);
            width: 100%;

            h3{
                margin-bottom: 8px;
                color: $marrom-escuro;
            }
            
            
            .wrapper-cards{
                width: 100%;
                @include flex(row, start, center);
                flex-wrap: wrap;
                padding: 32px 0;
                gap: 32px;

                @media (max-width: 768px){
                    justify-content: center;
                }

                @media (min-width: 1114px){
                    justify-content: space-between;
                }
            }
        }
    }
</style>