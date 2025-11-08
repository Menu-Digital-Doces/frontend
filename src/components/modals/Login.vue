<script setup>
    import { isShallow, ref } from 'vue';
    import { useRouter } from 'vue-router';
import FundoModal from './FundoModal.vue';
import axios from 'axios';
import Logo from '@/general/logo.vue';

    var { changeActiveComponent, changeLoginCadastro, changeIsLogged, isAdmLogin } = defineProps({
      changeActiveComponent: Function,
      changeLoginCadastro: Function,
      changeIsLogged: Function,
      isAdmLogin: Boolean
    })

    var nonAutorizhedState = ref(false)
    var inputEmailValue = ref('')
    var inputPasswordValue = ref('')
    const router = useRouter();

    function sendData(email, password){ /*Login*/
      nonAutorizhedState.value = false;

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
        localStorage.removeItem('token')
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('name', response.data.user.name)
        localStorage.setItem('email', response.data.user.email)
        changeIsLogged();
        if(isAdmLogin){
          router.push('/painel-do-admin/gestao-de-pedidos')
        }else{
          changeActiveComponent()
          
        }
      })
      .catch(error => {
        if(error.status === 401){
          nonAutorizhedState.value = true;
        }
      })
    }


</script>

<template>
    <FundoModal @click="changeActiveComponent()"></FundoModal>
  <div id="modal-login" class="box-modal">
    <a href="#" class="btn-close" @click="changeActiveComponent()">X</a>
    <Logo></Logo>

    <form class="box-form" @submit.prevent="sendData(inputEmailValue, inputPasswordValue)">
      <label for="login-email">Login</label>
      <input type="email" id="login-email" required v-model="inputEmailValue"/>
        <br>
      <label for="login-password">Senha</label>
      <input type="password" id="login-password" required v-model="inputPasswordValue"/>
      <!-- <a href="#" class="link link-forget-password">Esqueci minha senha</a> -->

      <p id="error" v-if="nonAutorizhedState">Algo deu errado. Tente novamente.</p>

      <input type="submit" class="btn-btn"/>

      <a href="#" class="link" id="link-cadastro" @click.prevent="changeLoginCadastro()">Cadastre-se</a>
      <a href="#" class="link" id="link-cadastro"><RouterLink class="link" id="link-b" :to="{name: 'login'}" @click="changeActiveComponent()">Painel do admin</RouterLink></a>
    </form>



  </div>
</template>

<style lang="scss">
    #modal-login{
    z-index: 11;
    top: 80px;
    right: 60px;
    padding-top: 75px;
    z-index: 10;
   

    form{
      
      p{
        font-size: 12px;
        margin-top: 8px;
        color: var(--rosa-escuro);
        
      }

      #link-cadastro{
        align-self: center;
        margin-top: 20px;
      }
    }

    #error{
      align-self: center;
    }

    @media (max-width: 768px){
        inset: 0;
        margin: auto;
    }

    #login-logo{
      width: 100px;
      margin-bottom: 32px;
    }



    .btn-close{
        position: absolute;
        top: 25px;
        right: 25px;
    }

    .btn-btn{
        margin-bottom: 16px;
        align-self: center;
        cursor: pointer;
        margin-top: 32px;
    }

    #link-b{
      color: var(--azul);
    }

    }
</style>
