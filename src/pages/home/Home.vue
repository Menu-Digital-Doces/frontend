<script setup>
import Nav from "@/components/nav/Nav.vue";
import Apresentacao from "@/components/home/Apresentacao.vue";
import Doces from "@/components/home/Doces.vue";
import Historia from "@/components/home/Historia.vue";
import Footer from "@/components/footer/Footer.vue";
</script>

<template>
  <Nav></Nav>
  <div class="container">
    <Apresentacao></Apresentacao>
    <!-- <Doces></Doces>     -->
    <Historia></Historia>
  </div>
  <Footer></Footer>
</template>

<style lang="scss"></style>
