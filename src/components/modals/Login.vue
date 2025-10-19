<script setup>
    import FundoModal from './FundoModal.vue';

    

</script>

<template>
    <FundoModal></FundoModal>
  <div id="modal-login" class="box-modal">
    <a href="#" class="btn-close">X</a>

    <form class="box-form">
      <label for="login-email">Login</label>
      <input type="email" id="login-email" />
        <br>
      <label for="login-password">Senha</label>
      <input type="password" id="login-password" />
    </form>

    <a href="#" class="link link-forget-password">Esqueci minha senha</a>

    <a href="#" class="btn">Login</a>

    <a href="#" class="link">Cadastre-se</a>
  </div>
</template>

<style lang="scss">
    #modal-login{
    top: 80px;
    right: 60px;
    padding-top: 75px;

    @media (max-width: 768px){
        inset: 0;
        margin: auto;
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
