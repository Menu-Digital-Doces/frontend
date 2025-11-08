<script setup>
import { RouterLink } from 'vue-router';


const { idPedido, numPedido, totalPedido } = defineProps({idPedido: Number, numPedido: String, totalPedido: Number})

</script>

<template>
    <li id="li-ver-cliente"><a id="a-ver-cliente" href="#" class="link"><RouterLink :to="{name: 'pedidoADM', params: {orderId: idPedido}}" :style="{'color': '#007bff'}">{{ numPedido }}</RouterLink></a><span>R${{ totalPedido }},00</span></li>
</template>

<style lang="scss">
    #li-ver-cliente, #a-ver-cliente{
        color: var(--azul);
        
        &:visited{
            color: var(--azul);
        }
    }
</style>