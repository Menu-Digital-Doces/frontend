<script setup>
import Card from './Card.vue';

import axios from 'axios';










</script>

<template>
    <div class="container" id="listagem-doces">
        <div class="container-cards">
            <h3>Doces</h3>
            <hr>
            <div class="wrapper-cards">
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
        <div class="container-cards">
            <h3>Bolos</h3>
            <hr>
            <div class="wrapper-cards">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
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