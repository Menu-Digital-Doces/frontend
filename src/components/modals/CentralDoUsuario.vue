<script setup>
    import { XMarkIcon } from '@heroicons/vue/24/solid';
    import FundoModal from './FundoModal.vue';
    import AlertaConfirmacao from './AlertaConfirmacao.vue';

    const { changeActiveComponent } = defineProps({changeActiveComponent: Function})

    // var propAlerta = "Sua conta foi criada com sucesso!"
    // var propAlerta2 = "Seu pedido foi pago! Ele começara a ser separado, te informaremos quando estiver pronto."
    
</script>

<template>
    <FundoModal @click="changeActiveComponent()"></FundoModal>
  <div class="box-modal" id="modal-centralDoUsuario">
    <span @click="changeActiveComponent()"><XMarkIcon class="btn-close"/></span>
    <img src="https://images.tcdn.com.br/img/img_prod/849569/berloque_robozinho_5417_1_20231121121518.jpg" alt="foto do robo"/>
    <p class="modal-login-saudacoes">Olá, usuário!</p>
    <hr />
    <a href="#" class="link"><RouterLink to="meus-pedidos">Ver meus pedidos</RouterLink></a>
    <a href="#" class="link">Rastrear pedido</a>

    <a href="#" class="btn">Sair</a>
  </div>
  <!-- <AlertaConfirmacao v-bind:text="propAlerta"></AlertaConfirmacao>
  <AlertaConfirmacao v-bind:text="propAlerta2"></AlertaConfirmacao> -->
</template>

<style lang="scss">

#modal-centralDoUsuario{
    top: 80px;
    right: 60px;

    @media (max-width: 768px){
        inset: 0;
        margin: auto;
    }

    span{
        position: absolute;
        top: 10px;
        right: 25px;
       
    }
 

    img{
        width: 100px;
        border-radius: 50px;
        margin-bottom: 30px;
    }

    p, a{
        align-self: start;
        font-weight: 200;
    }

    hr{
        margin-bottom: 20px; margin-top: 5px
    }
    
    .btn{
        margin-top: 30px;
        align-self: center;
        border: 2px solid $rosa-escuro;
        color: $rosa-escuro;
        font-weight: normal;
    }
}

</style>
