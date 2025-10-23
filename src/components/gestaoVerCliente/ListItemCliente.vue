<script setup>

const { numPedido, totalPedido } = defineProps({numPedido: String, totalPedido: String})

</script>

<template>
    <li><a href="#" class="link">{{ numPedido }}</a><span>R${{ totalPedido }},00</span></li>
</template>

<style lang="scss">

</style>