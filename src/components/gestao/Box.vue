<script setup>



const { icon, text, num } = defineProps({icon: [Object, String], text: String, num: [Number, String]})
import { Icon } from "@iconify/vue";




</script>

<template>
  <div class="box">
    <Icon class="box-icon" :icon="icon"></Icon>
    <div class="box-right">
      <p>{{ num }}</p>
      <h2>{{ text }}</h2>
    </div>
  </div>
</template>

<style lang="scss">


.box {
  width: calc((100% / 3) - 48px);
  height: 150px;
  background-color: $branco;
  border-radius: 40px;
  @include flex(row, center, center);
  gap: 32px;
  padding: 16px;

  .box-icon {
    font-size: 75px;
    color: $marrom-escuro;
  }

  div {
    text-align: center;
    color: $marrom-escuro;

    p {
      font-size: 24px;
    }

    h2 {
      font-size: 16px;
    }

    }

    @media (max-width: 768px){
        width: 100%;
    }
}
</style>
