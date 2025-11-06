<script setup>
import Box from '../gestao/Box.vue';
import { UserIcon, ClipboardDocumentListIcon } from '@heroicons/vue/24/solid';

const { data } = defineProps({data: Object})


</script>

<template>
    <div id="pedidos-cliente-topo">
        <h1 class="titulo titulo-gestao">Área do cliente</h1>
        <div class="boxes-gestao">
            <Box v-bind:="{icon: 'solar:user-bold',       text:'Cliente', num:data.Cliente,}"></Box>
            <Box v-bind:="{icon: 'la:file-invoice-dollar', text:'Pedidos', num:data.Pedidos,}"></Box>
        </div>
    </div>
</template>

<style lang="scss">
    #pedidos-cliente-topo{
        > .boxes-gestao {
            > .box{
                width: calc(50% - 48px);
            
                @media all and (max-width: 768px){
                    width: 100%;
                }
            }
        }
    }
</style>