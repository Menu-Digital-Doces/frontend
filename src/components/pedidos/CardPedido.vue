<script setup>

const { data } = defineProps({data: Object})

</script>

<template>
  <div class="card-pedido">
    <div class="info-pedido">
      <p class="codigo-pedido">Pedido #{{ data.codigo }}</p>
      <p :class="['status-pedido', data.status.toLowerCase()]">{{ data.status }}</p>
    </div>
    <RouterLink class="link" :to="{name: 'pedido', params: {orderId: data.id}}">Ver</RouterLink>
  </div>
</template>

<style lang="scss">
.card-pedido {
  width: 100%;
  @include flex(row, space-between, center);
  padding: 30px 50px 30px 30px;
  background-color: $branco;
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
      color: $marrom-escuro;
      font-size: 16px;
      margin-bottom: 4px;
    }

    .status-pedido {
      font-size: 14px;
      font-weight: 300;
      padding: 4px 8px;
      border-radius: 5px;
      color: $branco;

      &.pendente {
        color: $vermelho;
      }
      &.entregue {
        color: $verde;
      }
      &.confirmado {
        color: $amarelo;
      }
      /* Adicionar mais status conforme necessário */
    }
  }

  .link{
    color: $preto;
    text-transform: uppercase;
    font-weight: bold;

    :visited{
      color: $preto;
    }
  }
  
}
</style>