<script setup>
import FundoModal from './FundoModal.vue';

</script>

<template>
    <FundoModal></FundoModal>
  <div class="box-modal" id="modal-cadastro">
    <a href="#" class="btn-close">X</a>

    <form class="box-form">
      <label for="">Login</label>
      <input type="email" name="" />
        <br>
      <label for="">Digie a senha</label>
      <input type="email" name="" />
        <br>
      <label for="">Repita a senha</label>
      <input type="email" name="" />
    </form>

    <a class="btn" href="#">Cadastrar-se</a>

    <a href="#" class="link">Login</a>
  </div>
</template>

<style lang="scss">
    #modal-cadastro{
        top: 80px;
        right: 60px;
        padding-top: 75px;

        .btn-close{
            position: absolute;
            top: 25px;
            right: 25px;
        }

        .btn{
            color: $preto;
            border: 2px solid $preto;
            margin-top: 48px;
            margin-bottom: 24px;
        }
    }


</style>
