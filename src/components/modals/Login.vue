<script setup>
    import { ref } from 'vue';
import FundoModal from './FundoModal.vue';
import axios from 'axios';

    var { changeActiveComponent, changeLoginCadastro } = defineProps({
      changeActiveComponent: Function,
      changeLoginCadastro: Function
    })

    var emailDoesntExist = ref(false)
    var wrongPasswordState = ref(false)
    var inputEmailValue = ref('')
    var inputPasswordValue = ref('')


    function sendData(email, password){
      emailDoesntExist.value = false;
      wrongPasswordState.value = false;

      axios.request({
        method: 'POST',
        url: '/login',
        data: {
          'email': email,
          'password': password
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }


</script>

<template>
    <FundoModal @click="changeActiveComponent()"></FundoModal>
  <div id="modal-login" class="box-modal">
    <a href="#" class="btn-close" @click="changeActiveComponent()">X</a>
    <img src="../../assets/logo.png" alt="" id="login-logo">

    <form class="box-form" @submit.prevent="sendData(inputEmailValue, inputPasswordValue)">
      <label for="login-email">Login</label>
      <input type="email" id="login-email" required v-model="inputEmailValue"/>
        <br>
      <label for="login-password">Senha</label>
      <input type="password" id="login-password" required v-model="inputPasswordValue"/>
      <a href="#" class="link link-forget-password">Esqueci minha senha</a>

      <p v-if="emailDoesntExist">Email não encontrado. Cadastre-se</p>
      <p v-if="wrongPasswordState">A senha está incorreta</p>

      <input type="submit" class="btn"/>

      <a href="#" class="link" id="link-cadastro" @click.prevent="changeLoginCadastro()">Cadastre-se</a>
    </form>



  </div>
</template>

<style lang="scss">
    #modal-login{
    top: 80px;
    right: 60px;
    padding-top: 75px;

    form{
      p{
        font-size: 12px;
        margin-top: 8px;
        color: $rosa-escuro;
    
      }
    }

    @media (max-width: 768px){
        inset: 0;
        margin: auto;
    }

    #login-logo{
      width: 100px;
      margin-bottom: 64px;
    }



    .btn-close{
        position: absolute;
        top: 25px;
        right: 25px;
    }

    .btn{
        border: 2px solid $preto;
        color: $preto;
        margin-bottom: 16px;
    }


    }
</style>
