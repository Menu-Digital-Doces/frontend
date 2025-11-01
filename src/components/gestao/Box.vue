<script setup>



const { icon, text, num } = defineProps({icon: [Object, Function], text: String, num: [Number, String]})




</script>

<template>
  <div class="box">
    <span class="box-icon"><icon /></span>
    <div class="box-right">
      <p>{{ num }}</p>
      <h2>{{ text }}</h2>
    </div>
  </div>
</template>

<style lang="scss">


.box {
  width: calc((100% / 3) - 32px);
  height: 150px;
  background-color: $branco;
  border-radius: 30px;
  @include flex(row, center, center);
  gap: 16px;
  padding: 16px;

  .box-icon {
    width: 75px;
    color: $marrom-escuro;
  }

  div {
    text-align: center;
    color: $marrom-escuro;

    p {
      font-size: 24px;
      font-weight: bold;
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
