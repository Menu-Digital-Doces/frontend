<script setup>
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid';
import { ref, watch } from 'vue';
import GestaoEditarItem from '../modals/GestaoEditarItem.vue';
import axios from 'axios';
import Alerta from '../modals/Alerta.vue';
import { text } from '@fortawesome/fontawesome-svg-core';

const props = defineProps({data: {type: Object, default: () => {} }, resetData: Function});
const product = ref(props.data);
const modalState = ref(false)

const alertState = ref(false);
const alertText = ref('')

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
        alertText.value = error.response.data.message
        toggleAlert()
    })
}

function toggleAlert(){
    alertState.value = !alertState.value
}

</script>

<template>
    <Alerta v-if="alertState" v-bind:="{text: alertText, toggleAlert: () => toggleAlert()}"></Alerta>
    <li class="list-item-estoque" id="lie">
        <span class="list-item--estoque-descricao">{{ product.nome }}</span>
        <span class="list-item--estoque-descricao">{{ product.descricao }}</span>
        <span class="lie-preco">R${{ product.preco }}</span>
        <span><img :src="product.imagem"/></span>
        <span>UN</span>
        <span>{{ product.quantidade }}</span>
        <span class="icons">
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
        flex-grow: 1;
        min-width: 0;
        width: 100%;

        @include flex(row, space-between, center);
        padding: 24px 24px;
        margin-bottom: 32px;
        background-color: var(--branco);
        border-radius: 10px;

        img{
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 15px;
            object-position: bottom;
        }

        span{
            width: calc(100%/7);
            @include flex(row, space-evenly, center);
            font-weight: 200;

            a{
                width: 24px;
                height: 24px;
            }
            .edit{
                color: var(--azul);
            }
            .delete{
                color: var(--rosa-escuro);
            }

            &.lie-preco{
                font-weight: bold;
                color: var(--marrom-escuro);
            }
        }
        
        .list-item--estoque-descricao{
            display: block;
            text-align: justify;
            overflow: hidden;
            text-overflow: ellipsis;
            text-wrap: nowrap;
            width: calc(100% / 7);
        }

        @media all and (max-width: 968px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 32px 32px;
            border-radius: 50px;
            border-radius: 15px;

            span{
                width: 100%;
                justify-content: start;
                align-items: start;
            
                &:first-child{
                    font-weight: bold;
                }
            }

            

            .list-item--estoque-descricao{
                width: 100%;
                text-wrap: wrap;
            }

            .icons{
                width: 100%;
                justify-content: space-evenly;
                align-items: start;
                
            }
        }
    }

   
</style>
