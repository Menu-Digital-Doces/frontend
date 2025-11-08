<script setup>
// 1. Define as props e armazena o objeto de props reativo na variável 'props'
const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    executarBusca: {
        type: Function,
        required: true
    }
})

// 2. Acesse os valores das props através da variável 'props'
console.log(props.data) 

// Se você precisar desestruturar para usar no escopo do script, faça assim:
// const { data, executarBusca } = props; 
// Mas no template, é mais seguro usar 'props.data'
</script>

<template>
  <div class="card-pedido">
    <div class="info-pedido">
      <!-- 3. ACESSE AS PROPS DIRETAMENTE NO TEMPLATE USANDO O NOME DA VARIÁVEL 'props' -->
      <p class="codigo-pedido">Pedido #{{ props.data.codigo }}</p>
      <p :class="['status-pedido', props.data.status.toLowerCase()]">{{ props.data.status }}</p>
    </div>
    <!-- 4. Chame a função usando 'props.executarBusca' -->
    <a href="" class="link" @click.prevent="props.executarBusca(props.data.codigo)">Ver</a>
  </div>
</template>

<style lang="scss">
.card-pedido {
  width: 100%;
  @include flex(row, space-between, center);
  padding: 30px 50px 30px 30px;
  background-color: var(--branco);
  border-radius: 30px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }

  .info-pedido {
    @include flex(column, start, start);

    .codigo-pedido {
      font-weight: bold;
      color: var(--marrom-escuro);
      font-size: 16px;
      margin-bottom: 4px;
    }

    .status-pedido {
      font-size: 14px;
      font-weight: 300;
      padding: 4px 8px;
      border-radius: 5px;
      color: var(--branco);

      &.pendente {
        color: var(--vermelho);
      }
      &.entregue {
        color: var(--verde);
      }
      &.confirmado {
        color: var(--amarelo);
      }
      /* Adicionar mais status conforme necessário */
    }
  }

  .link{
    color: var(--preto);
    text-transform: uppercase;
    font-weight: bold;

    :visited{
      color: var(--preto);
    }
  }
  
}
</style>