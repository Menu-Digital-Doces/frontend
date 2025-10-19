<script setup>
import { ref } from 'vue';
import ListItemPedido from './ListItemPedido.vue';



    /* 
        1 - Todos
        2 - Pendente
        3 - Em produção
        4 - Entregue
    */

    var activeFilter = ref(1)

    function changeActiveFilter(num){
        activeFilter.value = num;
    }

</script>

<template>
    <div id="gestao-de-pedidos-baixo">
        <p>
            <a href="#" @click.prevent="changeActiveFilter(1)">Todos</a>
            <a href="#" @click.prevent="changeActiveFilter(2)">Pendente</a>
            <a href="#" @click.prevent="changeActiveFilter(3)">Em produção</a>
            <a href="#" @click.prevent="changeActiveFilter(4)">Entregue</a>
        </p>
        <ul>
            <ListItemPedido>a</ListItemPedido>
            <!--  -->
            <ListItemPedido v-if="activeFilter === 1 || activeFilter === 2" v-bind:status=2>b</ListItemPedido>
            <ListItemPedido v-if="activeFilter === 1 || activeFilter === 3" v-bind:status=3>b</ListItemPedido>
            <ListItemPedido v-if="activeFilter === 1 || activeFilter === 3" v-bind:status=3>b</ListItemPedido>
            <ListItemPedido v-if="activeFilter === 1 || activeFilter === 3" v-bind:status=3>b</ListItemPedido>
            <ListItemPedido v-if="activeFilter === 1 || activeFilter === 4" v-bind:status=4>b</ListItemPedido>
            <ListItemPedido v-if="activeFilter === 1 || activeFilter === 4" v-bind:status=4>b</ListItemPedido>
         
        </ul>
    </div>
</template>

<style lang="scss">
    #gestao-de-pedidos-baixo{
        width: 100%;
        @include flex(column, center, center);
        padding: 100px 0;

        p{
            @include flex(row, space-between, center);
            width: 400px;
            
        }

        ul{
            width: 100%;
            
            
            li:first-child{
                background-color: transparent;

                .link{
                    visibility: hidden;
                }
            }
        }
    }
</style>