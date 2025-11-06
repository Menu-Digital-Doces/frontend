<script setup>
import Box from '../gestao/Box.vue';
import { ExclamationTriangleIcon, CurrencyDollarIcon } from '@heroicons/vue/24/solid';

const { data } = defineProps({data: Object})

</script>

<template>
    <div id="gestao-de-estoque-topo">
        <h1 class="titulo titulo-gestao">Gestão de estoque</h1>
        <div class="boxes-gestao">
            <Box v-bind:="{icon: 'mdi:alert-outline',       text:'Zerados', num:data.zerados,}"></Box>
            <Box v-bind:="{icon: 'nimbus:transfer-real', text:'Total em estoque', num:data.total_estoque,   }"></Box>
        </div>
    </div>
</template>

<style lang="scss">
    #gestao-de-estoque-topo{
        > .boxes-gestao{
            > .box{
                width: calc(50% - 48px);
            }

            @media all and (max-width: 768px){
                flex-direction: column;

                > .box{
                    width: 100%;
                }

                

            }

        }
    }
</style>