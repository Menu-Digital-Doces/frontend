<script setup>
import Box from '../gestao/Box.vue';
import { ExclamationTriangleIcon, CurrencyDollarIcon } from '@heroicons/vue/24/solid';

const { data } = defineProps({data: Object})


</script>

<template>
    <div id="gestao-de-estoque-topo">
        <h1 class="titulo titulo-gestao">Gestão de estoque</h1>
        <div class="boxes-gestao">
            <Box v-bind:="{icon: ExclamationTriangleIcon,       text:'Zerados', num:data.zerados,}"></Box>
            <Box v-bind:="{icon: CurrencyDollarIcon, text:'Total em estoque', num:data.total_estoque,   }"></Box>
        </div>
    </div>
</template>

<style lang="scss">
    #gestao-de-estoque-topo{
    }
</style>