<script setup>
import { ref, watch } from "vue";
import ListItemProduto from "./ListItemProduto.vue";
import GestaoEditarItem from "../modals/GestaoEditarItem.vue";

const props = defineProps({
  data: { type: Array, default: () => [] },
  resetData: Function,
});
const activeProducts = ref(props.data);
const activeFilter = ref(1);
const modalState = ref(false);

const productObj = {
  id: 0,
  nome: "",
  descricao: "",
  preco: "",
  quantidade: 0,
  imagem: "",
  status: "Ativo",
  categoria: "",
  created_at: "",
  updated_at: "",
};

watch(
  () => props.data,
  (newValue) => {
    activeProducts.value = newValue;
  },
  { immediate: true }
);

function changeActiveFilter(num) {
  activeFilter.value = num;

  if(num === 1){
    activeProducts.value = props.data; console.log(activeProducts.value)
  } else if(num === 2){
    activeProducts.value = props.data.filter(product => {
      if(product.estoque.quantidade === 0){
        return product;
      }
    })
  }else if (num === 3) { 
    activeProducts.value = props.data.sort((a, b) => a.quantidade - b.quantidade) 
  } else if (num === 4) { 
    activeProducts.value = props.data.sort((a, b) => b.quantidade - a.quantidade) 
  }
}

function toggleEdit() {
  modalState.value = !modalState.value;
}
</script>

<template>
  <div id="modal-estoque">
    <GestaoEditarItem
      v-if="modalState"
      v-bind:="{
        data: productObj,
        toggleEdit: () => toggleEdit(),
        resetData: resetData,
        mode: 'Criar',
      }"
    ></GestaoEditarItem>
  </div>
  <div id="gestao-de-estoque-baixo">
    <p id="stats">
      <a href="#" @click.prevent="changeActiveFilter(1)" :class="activeFilter === 1 ? 'active' : ''">Todos</a>
      <a href="#" @click.prevent="changeActiveFilter(2)" :class="activeFilter === 2 ? 'active' : ''">Zerados</a>
      <a href="#" @click.prevent="changeActiveFilter(3)" :class="activeFilter === 3 ? 'active' : ''">Menor - Maior</a>
      <a href="#" @click.prevent="changeActiveFilter(4)" :class="activeFilter === 4 ? 'active' : ''">Maior - Menor</a>
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
        <ListItemProduto
          v-for="pedidoItem in activeProducts"
          v-bind:="{ data: pedidoItem, resetData: resetData }"
          :key="pedidoItem.id"
        >
        </ListItemProduto>
      </ul>
   
    <a href="#" class="btn-btn" @click.prevent="toggleEdit()">Adicionar</a>
  </div>
</template>

<style lang="scss">
#gestao-de-estoque-baixo {
  width: 100%;
  @include flex(column, center, center);
  padding: 100px 0;

  p {
    @include flex(row, space-between, center);
    width: 600px;
    margin-bottom: 96px;
  }

  #stats{
    a{
        color: var(--marrom-escuro);

        &.active{
            font-weight: bold;
        }
    }    
  }

  #descricao {
    width: 100%;
    padding: 0 24px;
    margin-bottom: 48px;

    span {
      width: calc(100% / 7);
      @include flex(row, space-evenly, center);
    }
  }

  ul {
    width: 100%;
  }

  @media all and (max-width: 768px) {
    #stats{
        flex-direction: column;
        gap: 32px;

    }

    #descricao{
        display: none;
    }  
  }

  .btn-btn{
    margin-top: 64px;
  }
}
</style>
