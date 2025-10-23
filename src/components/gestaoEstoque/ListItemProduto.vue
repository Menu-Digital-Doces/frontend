<script setup>
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid';

    const { dados } = defineProps({dados: Object})



</script>

<template>
    <li class="list-item-estoque">
        <span>{{ dados.nome }}</span>
        <span>{{ dados.descricao }}</span>
        <span>{{ dados.valor }}</span>
        <span><img :src="dados.img"/></span>
        <span>{{ dados.unidade }}</span>
        <span>{{ dados.quantidade }}</span>
        <span>
            <a href="#" class="edit"><PencilSquareIcon></PencilSquareIcon></a>
            <a href="#" class="delete"><TrashIcon></TrashIcon></a>
        </span>
    </li>
</template>

<style lang="scss">
    .list-item-estoque{
        @include flex(row, space-between, center);
        padding: 16px 24px;
        margin-bottom: 32px;
        background-color: $branco;
        border-radius: 10px;

        img{
            width: 50px;
            height: 50px;
            object-fit: cover;
        }

        span{
            width: calc(100%/7);
            @include flex(row, space-evenly, center);

            a{
                width: 24px;
                height: 24px;
            }
            .edit{
                color: $azul;
            }
            .delete{
                color: $rosa-escuro;
            }
        }
    }
</style>
