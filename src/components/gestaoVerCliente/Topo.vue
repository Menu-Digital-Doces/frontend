<script setup>
import Box from '../gestao/Box.vue';
import { UserIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/solid';

const { data } = defineProps({data: Object})


</script>

<template>
    <div id="pedidos-cliente-topo">
        <h1 class="titulo titulo-gestao">Gestão de pedidos</h1>
        <div class="boxes-gestao">
            <Box v-bind:="{icon: UserIcon,       text:'Cliente', num:data.Cliente,}"></Box>
            <Box v-bind:="{icon: ClipboardDocumentListIcon, text:'Pedidos', num:data.Pedidos,}"></Box>
        </div>
    </div>
</template>

<style lang="scss">

</style>