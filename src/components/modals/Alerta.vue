<script setup>
    import { RouterLink } from 'vue-router';

    const props = defineProps({text: "", toggleAlert: Function})



</script>

<template>
    <div class="box-modal" id="alerta">
    <p>{{props.text}}</p>
    <a class="btn-btn" @click="props.toggleAlert()">Ok</a>
  </div>
</template>

<style lang="scss">
    #alerta{
        z-index: 11;
        inset: 0;
        margin: auto;
        width: fit-content;
        border-radius: 40px;
        @include flex(column, center, center);

        p{
            font-size: 14px;
            font-weight: 200;
            text-align: center;
            display: block !important;
            margin-bottom: 16px !important;
            align-self: center !important;
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
