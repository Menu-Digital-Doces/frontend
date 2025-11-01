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
  <div id="finalizarCompra-confirmacao">
    <h1>Selecione a forma de entrega</h1>
    <hr />
    <ul>
      <div>
        <p>Resumo de itens</p>
        <li v-for="produto in cart">{{ produto.nome }}<span>{{ produto.quantidadeDesejada }}</span></li>
      </div>
      <div>
        <p>Entrega</p>
        <li>{{ deliveryMethod }}<span>R$0</span></li>
      </div>
      <div>
        <p>Forma de pagamento</p>
        <li>{{ paymentMethod }}</li>
      </div>
      <div>
        <li>Total<span>15</span></li> <!--Calcular total-->
      </div>
    </ul>
  </div>
  <a href="" class="btn" @click.prevent="changeState()"></a>
</template>

<style lang="scss">

  #finalizarCompra-confirmacao{
    width: 100%;


    ul {
      @include flex(column, start, start);
      gap: 50px;
      padding: 30px 0;
      
      li,
      div {
        width: 100%;
      }
    
      li {
        @include flex(row, space-between, center);
      }
    }

  }

</style>
