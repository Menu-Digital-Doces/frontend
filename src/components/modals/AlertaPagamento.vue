<script setup>
import FundoModal from './FundoModal.vue';

const { payRequest } = defineProps({
    payRequest: Function
})

</script>

<template>
    <FundoModal></FundoModal>
  <div class="box-modal" id="box-alertaPagamento">
    <a href="#" class="btn-close">X</a>
    <p>Já é quase seu! Falta apenas realizar o pagamento do QRcode e seu pedido será separado.</p>
    <img id="qr-code" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg"/>
    <p>R$00,00</p>
    <b><p>Aguardando pagamento</p></b>
    <a href="#" class="btn-btn" id="pago" @click.prevent="payRequest()">Pago</a>
  </div>
</template>

<style lang="scss">
    #box-alertaPagamento{
        z-index: 11;
        inset: 0;
        margin: auto;
        width: 350px;
        align-items: start;
        padding-top: 75px;



        .btn-close{
            position: absolute;
            right: 15px;
            top: 20px;
        }

        img{
            width: 100px;
            align-self: center;
            margin: 32px 0;
        }

        p{
            font-size: 16px;
            text-align: justify;
        }

        p:last-child{
            font-weight: bold;
        }

        #pago{
            margin-bottom: 0;
        }
    }
</style>
