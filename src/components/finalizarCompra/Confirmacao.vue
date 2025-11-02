<script setup>
import { ref } from 'vue';

  const { changeState } = defineProps({
    changeState: Function
  })
  const paymentMethod = ref(localStorage.getItem('paymentMethod'))
  const deliveryMethod = ref(localStorage.getItem('deliveryMethod'))
  const cart = ref(JSON.parse(localStorage.getItem('cart') || "[]"))


</script>

<template>
  <div id="finalizarCompra-confirmacao" class="container-confirmacao">
    <h1 class="titulo-secao">Confirmação do Pedido</h1>
    <hr class="divisor-secao" />
    <div class="resumo-pedido">
      <div class="bloco-resumo">
        <p class="titulo-bloco">Resumo de itens</p>
        <ul class="lista-itens">
          <li v-for="produto in cart" :key="produto.id" class="item-resumo">
            <span class="item-nome">{{ produto.nome }}</span>
            <span class="item-quantidade">{{ produto.quantidadeDesejada }}</span>
          </li>
        </ul>
      </div>
      <div class="bloco-resumo">
        <p class="titulo-bloco">Entrega</p>
        <ul class="lista-itens">
          <li class="item-resumo">
            <span class="item-nome">{{ deliveryMethod }}</span>
            <span class="item-valor">R$0</span>
          </li>
        </ul>
      </div>
      <div class="bloco-resumo">
        <p class="titulo-bloco">Forma de pagamento</p>
        <ul class="lista-itens">
          <li class="item-resumo">
            <span class="item-nome">{{ paymentMethod }}</span>
          </li>
        </ul>
      </div>
      <div class="bloco-total">
        <span class="total-texto">Total</span>
        <span class="total-valor">R$15</span> <!--Calcular total-->
      </div>
    </div>
    <a href="" class="btn-btn" @click.prevent="changeState('confirmacao')">Finalizar Pedido</a>
  </div>
</template>

<style lang="scss">

  #finalizarCompra-confirmacao{
    @include flex(column, start, start);
    width: 100%;
    /* max-width: 500px; */
    /* margin: 0 auto; */
    padding: 20px;
    background-color: transparent;
    border-radius: 15px;
    /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); */
    padding-top: 40px;
    

    .titulo-secao{
      font-size: 32px;
      font-weight: bold;
      color: $marrom-escuro;
      margin-bottom: 10px;
    }

    .divisor-secao{
      border: 0;
      height: 1px;
      background-color: $cinza-claro;
      margin-bottom: 20px;
    }

    .resumo-pedido{
      @include flex(column, start, start);
      width: 100%;
      gap: 20px;
      padding: 10px 0;

      .bloco-resumo{
        width: 100%;
        
        .titulo-bloco{
          font-weight: bold;
          color: $rosa-escuro;
          margin-bottom: 8px;
          font-size: 16px;
        }

        .lista-itens{
          @include flex(column, start, start);
          gap: 5px;
          padding-left: 10px;

          .item-resumo{
            @include flex(row, space-between, center);
            width: 100%;
            font-size: 14px;
            color: $marrom-escuro;
            padding: 5px 0;
            border-bottom: 1px dotted $cinza-claro;

            &:last-child{
              border-bottom: none;
            }
          }
        }
      }

      .bloco-total{
        @include flex(row, space-between, center);
        width: 100%;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid $cinza-claro;
        font-weight: bold;
        color: $marrom-escuro;
        font-weight: bold;
        

        .total-valor, .total-texto{
          font-weight: bold;
        }
      }
    }

    .btn-btn{
      margin: 60px auto;
    }
  }

</style>