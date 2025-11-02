<script setup>
import Apresentacao from "@/components/home/Apresentacao.vue";
import Doces from "@/components/home/Doces.vue";
import Historia from "@/components/home/Historia.vue";
</script>

<template>
  <div id="pagina-home">
    <Apresentacao></Apresentacao>
    <Doces></Doces>    
    <Historia></Historia>
  </div>
</template>

<style lang="scss">
   #pagina-home{
        overflow-x: hidden;
   }
</style>
