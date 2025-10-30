<script setup>
import Confirmacao from "@/components/finalizarCompra/Confirmacao.vue";
import Entrega from "@/components/finalizarCompra/Entrega.vue";
import Pagamento from "@/components/finalizarCompra/Pagamento.vue";
</script>

<template>
  <div class="container" id="container-finalizarCompra">
    <!-- <Entrega></Entrega> -->
    <Pagamento></Pagamento>
    <!-- <Confirmacao></Confirmacao> -->

    <a href="" class="btn">Continuar</a>
  </div>
</template>

<style lang="scss">
#container-finalizarCompra {
  @include flex(column, center, center);
  
  h1 {
    margin-bottom: 10px;
    font-weight: bold;
    color: $marrom-escuro;
    font-size: clamp(1rem, 6vw, 2rem);
  }
  
  form {
    @include flex(column, center, center);
    gap: 25px;
    padding: 32px 0;
    
    label {
      @include flex(row, space-between, center);
      width: 100%;
      
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
      }
      
      padding: 30px;
      background-color: $branco;
      border-radius: 20px;
      box-shadow: 0px 4px 4px -3px black;
      
      p {
        font-weight: 100;
      }
      
      .endereco {
        color: $preto;
        font-weight: normal;
        margin-top: 10px;
      }
    }
    
    .check-radius {
      width: 27px;
      height: 27px;
      color: red;
      background-color: red;
      accent-color: black;
    }
  }
  
  #finalizarCompra-pagamento, #finalizarCompra-entrega {
    width: 100%;

    hr{
      margin-bottom: 150px;
    }
  }
  
  #finalizarCompra-pagamento {

    form {
        flex-direction: row;

      label {
        width: 150px;
        flex-direction: column;
        gap: 16px;

        img{
            width: 70px;
        }
      }

    }
  }

  .btn{
    color: $rosa-escuro;
    border: 2px solid $rosa-escuro;
          margin-bottom: 150px;
  }
}
</style>
