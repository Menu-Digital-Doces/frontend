<script setup>
import { RouterLink } from 'vue-router';


const { idPedido, numPedido, totalPedido } = defineProps({idPedido: Number, numPedido: String, totalPedido: Number})

</script>

<template>
    <li><a href="#" class="link"><RouterLink :to="{name: 'pedidoADM', params: {orderId: idPedido}}">{{ numPedido }}</RouterLink></a><span>R${{ totalPedido }},00</span></li>
</template>

<style lang="scss">

</style>