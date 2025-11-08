<script setup>
    import { RouterLink } from 'vue-router';

    const props = defineProps({text: ""})



</script>

<template>
    <div class="box-modal" id="modal-alerta">
    <p>{{text}}</p>
    <RouterLink :to="{name: 'meus-pedidos'}" class="btn">Ok</RouterLink>
  </div>
</template>

<style lang="scss">
    #modal-alerta{
        z-index: 11;
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
            border: 2px solid var(--preto);
            color: var(--preto);
            margin-bottom: 0;
        }

        #ok{
            margin-bottom: 0;
        }
    }
</style>
