<script setup>
import { ref } from 'vue';
import FundoModal from './FundoModal.vue';
import axios from 'axios';
import * as seila from './Login.vue';

  var { changeActiveComponent, changeLoginCadastro} = defineProps({
    changeActiveComponent: Function, 
    changeLoginCadastro: Function,
  })
  
  var wrongPasswordState = ref(false)
  var lengthPasswordState = ref(false)
  var msgEmailState = ref(false)
  var msgAccCreatedState = ref(false)
  var inputNameValue = ref('')
  var inputEmailValue = ref('')
  var inputPasswordValue = ref('')
  var inputPasswordConfirmationValue = ref('')
  
  
  function verifyValues(name, email, password, passwordConfirmation){
    wrongPasswordState.value = false
    lengthPasswordState.value = false
    msgEmailState.value = false


    if(password === passwordConfirmation && password.length >= 6){
      wrongPasswordState.value === true ? wrongPasswordState.value = !wrongPasswordState.value : ''
      lengthPasswordState.value === true ? lengthPasswordState.value = !lengthPasswordState.value : ''
      sendData(name, email, password, passwordConfirmation)
    }else{
      inputPasswordValue.value = ''
      inputPasswordConfirmationValue.value = ''
      
      if(password !== passwordConfirmation){
        wrongPasswordState.value = !wrongPasswordState.value
      }else{
        lengthPasswordState.value = !lengthPasswordState.value
      }
    }
  }

  function sendData(name, email, password, passwordConfirmation){
    axios.request({
      method: 'POST',
      url: '/register',
      data: {
        'name': name,
        'email': email,
        'password': password,
        'password_confirmation': passwordConfirmation
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      msgAccCreatedState.value = true;
    })
    .catch(error => {
      console.log(error)
      if(error.response.data.message === "The email has already been taken."){
        msgEmailState.value = !msgEmailState.value
      }
    })
  }
  
  

</script>

<template>
    <FundoModal @click="changeActiveComponent()"></FundoModal>
  <div class="box-modal" id="modal-cadastro">
    <a href="#" class="btn-close" @click="changeActiveComponent()">X</a>

    <form class="box-form" @submit.prevent="verifyValues(inputNameValue, inputEmailValue, inputPasswordValue, inputPasswordConfirmationValue)">
      <label for="">Nome</label>
      <input type="text" name="" id="name" v-model="inputNameValue" required/>
      <br/>
      <label for="">Email</label>
      <input type="email" name="" id="email" v-model="inputEmailValue" required/>
        <br/>
      <label for="">Digie a senha</label>
      <input type="password" name="" id="password" v-model="inputPasswordValue" required/>
        <br/>
      <label for="">Repita a senha</label>
      <input type="password" name="" id="passwordConfirmation" v-model="inputPasswordConfirmationValue" required/>

      <p v-if="wrongPasswordState">As senhas não coincidem</p>
      <p v-if="lengthPasswordState">A senha deve ter no mínimo 6 caracteres</p>
      <p v-if="msgEmailState">Esse email já existe. Faça login.</p>
      <p v-if="msgAccCreatedState">A sua conta foi criada. Fazer login.</p>

      
      <input type="submit" class="btn-btn" href="#"/>
      <a href="#" class="link" @click.prevent="changeLoginCadastro()">Login</a>
    </form>


  </div>
</template>

<style lang="scss">
    #modal-cadastro{
        z-index: 11;
        top: 80px;
        right: 60px;
        padding-top: 75px;

        p{
          font-size: 12px;
          color: $rosa-escuro;
          margin-top: 8px;
        }

        .btn-close{
            position: absolute;
            top: 25px;
            right: 25px;
        }

        .link{
          align-self: center;
        }

        .btn-btn{
            margin: 24px 0;
            align-self: center;
        }
    }


</style>
