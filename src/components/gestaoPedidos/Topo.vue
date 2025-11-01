<script setup>
    import { QueueListIcon, ClockIcon, CheckCircleIcon } from "@heroicons/vue/24/solid";
import Box from '@/components/gestao/Box.vue';

const { data } = defineProps({data: Object})

</script>

<template>
    <div id="gestao-de-pedidos-topo">
        <h1 class="titulo titulo-gestao">Gestão de pedidos</h1>
        <div class="boxes-gestao">
            <Box v-bind:="{icon: QueueListIcon,   text:'Pendentes', num:data.pendentes,  }"></Box>
            <Box v-bind:="{icon: ClockIcon,       text:'Em produção', num:data.em_producao,}"></Box>
            <Box v-bind:="{icon: CheckCircleIcon, text:'Entregue', num:data.entregue,   }"></Box>
        </div>
    </div>
</template>

<style lang="scss">

</style>