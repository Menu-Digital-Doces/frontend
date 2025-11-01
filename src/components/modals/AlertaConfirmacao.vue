<script setup>
    import { RouterLink } from 'vue-router';

    const props = defineProps({text: ""})



</script>

<template>
    <div class="box-modal" id="modal-alerta">
    <p>{{text}}</p>
    <a href="#" class="btn" id="ok"><RouterLink to="/meus-pedidos-view">Ok</RouterLink></a>
  </div>
</template>

<style lang="scss">
    #modal-alerta{
        inset: 0;
        margin: auto;
        width: 350px;
        height: 200px;
        border: 1px solid black;

        p{
            font-size: 14px;
            font-weight: 200;
            margin-bottom: 20px;
            text-align: center;
        }

        .btn{
            border: 2px solid $preto;
            color: $preto;
            margin-bottom: 0;
        }

        #ok{
            margin-bottom: 0;
        }
    }
</style>
