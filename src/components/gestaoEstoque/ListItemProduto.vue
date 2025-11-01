<script setup>
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid';
import { ref, watch } from 'vue';
import GestaoEditarItem from '../modals/GestaoEditarItem.vue';
import axios from 'axios';

const props = defineProps({data: {type: Object, default: () => {} }, resetData: Function});
const product = ref(props.data);
const modalState = ref(false)

watch(() => props.data, (newValue) => { product.value = newValue; }, { immediate: true });

function toggleEdit(){
    modalState.value = !modalState.value
}

function deleteProduct(){
    console.log('id: ' + product.value.id)
    // activeProducts.value = activeProducts.value.filter(produto => produto.id !== id);
    axios.request({
        method: 'DELETE',
        url: `/produtos/${product.value.id}`,
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => {
        props.resetData()
    })
    .catch(error => {
        console.log(error.response.data)
    })
}

</script>

<template>
    <li class="list-item-estoque">
        <span>{{ product.nome }}</span>
        <span>{{ product.descricao }}</span>
        <span>{{ product.preco }}</span>
        <span><img :src="product.img"/></span>
        <span>UN</span>
        <span>{{ product.quantidade }}</span>
        <span>
            <a href="#" class="edit" @click.prevent="toggleEdit()"><PencilSquareIcon></PencilSquareIcon></a>
            <a href="#" class="delete" @click.prevent="deleteProduct()"><TrashIcon></TrashIcon></a>
        </span>
    </li>
    <div id="modal-estoque">
        <GestaoEditarItem
            v-if="modalState"
            v-bind:="{data: product, toggleEdit: () => toggleEdit(), resetData: resetData, mode: 'Editar'}"
        ></GestaoEditarItem>
    </div>
</template>

<style lang="scss">
        #modal-estoque{
            .fundo-modal{
                left: 0;
            }
        }
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
