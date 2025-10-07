<script setup>
    const props = defineProps({text: ""})



</script>

<template>
    <div class="box-modal" id="modal-alerta">
    <p>{{text}}</p>
    <a href="#" class="btn">Ok</a>
  </div>
</template>

<style lang="scss">
    #modal-alerta{
        inset: 0;
        margin: auto;
        width: 350px;

        p{
            font-size: 14px;
            font-weight: 200;
            margin-bottom: 20px;
            text-align: center;
        }

        .btn{
            border: 2px solid $preto;
            color: $preto;
        }
    }
</style>
