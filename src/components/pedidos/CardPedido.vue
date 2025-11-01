<script setup>

const { data } = defineProps({data: Object})

</script>

<template>
  <div id="card-pedido">
    <div>
      <p>{{ data.codigo }}</p>
      <p>{{ data.status }}</p>
    </div>
    <a href="#"><RouterLink :to="{name: 'pedido', params: {orderId: data.id}}">Ver</RouterLink></a>
  </div>
</template>

<style lang="scss">
#card-pedido {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 4px -3px $preto;
}
</style>
