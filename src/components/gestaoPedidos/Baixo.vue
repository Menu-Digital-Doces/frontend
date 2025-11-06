<script setup>
import { ref, computed } from "vue"; 
import ListItemPedido from "./ListItemPedido.vue";
import { RouterLink } from "vue-router";

const props = defineProps({ data: Array });

// Você definiu isso, vamos usá-lo!
const statusList = {
    2: "Pendente",
    3: "Confirmado",
    4: "Entregue",
}

// ... (compare permanece o mesmo) ...

var activeFilter = ref(1); 

function changeActiveFilter(num) {
  activeFilter.value = num;
}

// **Propriedade Computada para a Filtragem (CORREÇÃO FINAL)**
const filteredData = computed(() => {
    
    if (activeFilter.value === 1) {
        // Se o filtro for "Todos", retorna a lista completa
        return props.data;
    } else {
        // 1. Pegamos a string de status desejada (ex: "Pendente")
        //    usando o valor numérico do filtro (ex: 2)
        const expectedStatus = statusList[activeFilter.value];

        // 2. Filtramos comparando a propriedade 'status' do pedido
        //    com a string de status desejada.
        return props.data.filter(pedidoItem => pedidoItem.status === expectedStatus);
    }
});

</script>

<template>
<div id="gestao-de-pedidos-baixo">
    <p class="configs">
      <a
        href="#"
        @click.prevent="changeActiveFilter(1)"
        :class="activeFilter === 1 ? 'active' : ''"
        >Todos</a
      >
      <a
        href="#"
        @click.prevent="changeActiveFilter(2)"
        :class="activeFilter === 2 ? 'active' : ''"
        >Pendente</a
      >
      <a
        href="#"
        @click.prevent="changeActiveFilter(3)"
        :class="activeFilter === 3 ? 'active' : ''"
        >Em produção</a
      >
      <a
        href="#"
        @click.prevent="changeActiveFilter(4)"
        :class="activeFilter === 4 ? 'active' : ''"
        >Entregue</a
      >
    </p>
    <ul>
      <li class="list-item-pedido">
        <div class="left">
          <span class="link"><a href="#" class="link"><RouterLink id="ver">VER</RouterLink></a></span>
          <span class="item-num-pedido">Nº do pedido</span>
        </div>
        <div class="right">
          <span class="item-valor-pedido">Valor</span>
          <span class="item-status-pedido">Status</span>
        </div>
      </li>
      <ListItemPedido
        v-for="pedidoItem in filteredData"
        :key="pedidoItem.id" v-bind:="{pedido: pedidoItem}"
      ></ListItemPedido>
    </ul>
  </div>
</template>

<style lang="scss">
#gestao-de-pedidos-baixo {
  width: 100%;
  @include flex(column, center, center);
  padding: 100px 0;

  p {
    @include flex(row, space-between, center);
    width: 400px;
    

    a {
      color: $marrom-escuro;

      &:visited {
        color: $marrom-escuro;
      }
      &.active {
        font-weight: bold;
      }
    }
    
    &.configs{
        margin-bottom: 32px;
        
    }
  }

  

  ul {
    width: 100%;
    max-height: 500px;
    overflow-y: auto;
    

    li:first-child {
      background-color: $fundo;
      border-radius: 0;
      position: sticky;
      top: 0;

      div {
        &.left {
          width: calc(55% - 32px);
          justify-content: start;
        }
        &.right {
          width: calc(45% - 32px);
          justify-content: end;

            span{
                flex: 1;
            }
        }
      }

      .link {
        visibility: hidden;
      }

    }
    
  }
}
</style>
