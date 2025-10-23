<script setup>
import Box from '../gestao/Box.vue';
import { ExclamationTriangleIcon, CurrencyDollarIcon } from '@heroicons/vue/24/solid';

</script>

<template>
    <div id="gestao-de-estoque-topo">
        <h1 class="titulo titulo-gestao">Gestão de pedidos</h1>
        <div class="boxes-gestao">
            <Box v-bind:icon="ExclamationTriangleIcon"text="Zerados"num=0></Box>
            <Box v-bind:icon="CurrencyDollarIcon"text="Total em estoque"num="R$ 2500,00"></Box>

        </div>
    </div>
</template>

<style lang="scss">
    #gestao-de-estoque-topo{
    }
</style>