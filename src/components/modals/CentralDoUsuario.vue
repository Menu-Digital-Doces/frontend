<script setup>
    import { XMarkIcon } from '@heroicons/vue/24/solid';
    import FundoModal from './FundoModal.vue';
    import AlertaConfirmacao from './AlertaConfirmacao.vue';
import axios from 'axios';

    const { changeActiveComponent, changeIsLogged } = defineProps({
        changeActiveComponent: Function,
        changeIsLogged: Function
    })
    const user = localStorage.getItem('name')

    function logout(){
        axios.request({
            method: 'POST',
            url: '/logout',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            localStorage.removeItem('email')
            changeActiveComponent()
            changeIsLogged()
        })
        .catch(error => {
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            localStorage.removeItem('email')
            changeActiveComponent()
            changeIsLogged()
        })
    }

    // var propAlerta = "Sua conta foi criada com sucesso!"
    // var propAlerta2 = "Seu pedido foi pago! Ele começara a ser separado, te informaremos quando estiver pronto."
    
</script>

<template>
    <FundoModal @click="changeActiveComponent()"></FundoModal>
  <div class="box-modal" id="modal-centralDoUsuario">
    <span @click="changeActiveComponent()"><XMarkIcon class="btn-close"/></span>
    <img src="@/assets/logo-confeitaria-da-Cris.png" alt="foto do robo"/>
    <p class="modal-login-saudacoes">Olá, {{user}}!</p>
    <hr />
    <RouterLink to="meus-pedidos" class="link">Ver meus pedidos</RouterLink>
    <a href="#" class="link">Editar endereço</a>

    <a href="#" class="btn" @click.prevent="logout()">Sair</a>
  </div>
  <!-- <AlertaConfirmacao v-bind:text="propAlerta"></AlertaConfirmacao>
  <AlertaConfirmacao v-bind:text="propAlerta2"></AlertaConfirmacao> -->
</template>

<style lang="scss">

#modal-centralDoUsuario{
    z-index: 11;
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
