<script setup>
import Baixo from '@/components/gestaoEstoque/Baixo.vue';
import Topo from '@/components/gestaoEstoque/Topo.vue';
import GestaoEditarItem from '@/components/modals/GestaoEditarItem.vue';
</script>

<template>
    <GestaoEditarItem></GestaoEditarItem>
    <div class="container" id="gestao-de-estoque">
        <Topo></Topo>
        <Baixo></Baixo>
    </div>
</template>

<style lang="scss">
#gestao-de-estoque{
        /* background-color: beige; */
}
</style>