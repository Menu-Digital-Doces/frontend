<script setup>
import Baixo from '@/components/gestaoEstoque/Baixo.vue';
import Topo from '@/components/gestaoEstoque/Topo.vue';
</script>

<template>
    <div class="container" id="gestao-de-estoque">
        <Topo></Topo>
        <Baixo></Baixo>
    </div>
</template>

<style lang="scss">
#gestao-de-estoque{
        background-color: beige;
}
</style>