<script setup>
import { ref } from 'vue';
import ListItemProduto from './ListItemProduto.vue';



    /* 
        1 - Todos
        2 - Pendente
        3 - Em produção
        4 - Entregue
    */


    var dados = {
        nome: 'Bolo de banana',
        descricao: 'Bolo de banana',
        valor: '40',
        img: "../../../src/assets/1 - bolo de banana.png",
        unidade: 'UN',
        quantidade: '60',
    }
    var activeFilter = ref(1)


    function changeActiveFilter(num){
        activeFilter.value = num;
    }

</script>

<template>
    <div id="gestao-de-estoque-baixo">
        <p>
            <a href="#" @click.prevent="changeActiveFilter(1)">Todos</a>
            <a href="#" @click.prevent="changeActiveFilter(2)">Zerados</a>
            <a href="#" @click.prevent="changeActiveFilter(3)">Menor - Maior</a>
            <a href="#" @click.prevent="changeActiveFilter(4)">Maior - Menor</a>
        </p>
        <p id="descricao">
            <span>Nome</span>
            <span>Descrição</span>
            <span>Valor</span>
            <span>IMG</span>
            <span>UN</span>
            <span>Qnt.</span>
            <span>Ações</span>
        </p>
        <ul>
            <ListItemProduto v-bind:dados="dados"></ListItemProduto>
            <ListItemProduto v-bind:dados="dados"></ListItemProduto>
            <ListItemProduto v-bind:dados="dados"></ListItemProduto>
            <ListItemProduto v-bind:dados="dados"></ListItemProduto>
            <ListItemProduto v-bind:dados="dados"></ListItemProduto>
            <ListItemProduto v-bind:dados="dados"></ListItemProduto>
         
        </ul>

    </div>
</template>

<style lang="scss">
    #gestao-de-estoque-baixo{
        width: 100%;
        @include flex(column, center, center);
        padding: 100px 0;

        p{
            @include flex(row, space-between, center);
            width: 600px;
            margin-bottom: 96px;
            
        }

        #descricao{
            width: 100%;
            padding: 0 24px;
            margin-bottom: 48px;

            span{
                width: calc(100%/7);
                @include flex(row, space-evenly, center)
            }
        }

        ul{
            width: 100%;
        }
    }
</style>