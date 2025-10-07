<script setup>

import { ref } from 'vue';
import Avisos from './components/modals/Avisos.vue';
import Home from './pages/home/Home.vue';

  var StateModalAvisos = ref(false);

  function toggleAvisos(){
      StateModalAvisos.value = !StateModalAvisos.value;
  }

</script>

<template>
  <Home></Home>
  <Avisos v-if="StateModalAvisos"></Avisos>

</template>

<style lang="scss">



</style>
