<script setup>
import Confirmacao from "@/components/finalizarCompra/Confirmacao.vue";
import Entrega from "@/components/finalizarCompra/Entrega.vue";
import Pagamento from "@/components/finalizarCompra/Pagamento.vue";
import AlertaConfirmacao from "@/components/modals/AlertaConfirmacao.vue";
import AlertaPagamento from "@/components/modals/AlertaPagamento.vue";
import axios from "axios";
import { ref } from "vue";


const finalizationState = ref('entrega')
const modalConfirm = ref(false)
const modalPayed = ref(false)

function verifyState(componentName){
  return componentName === finalizationState.value;
}


function changeState(componentName){
  if (componentName === 'entrega') finalizationState.value = 'pagamento';
  if (componentName === 'pagamento') finalizationState.value = 'confirmacao';
  if (componentName === 'confirmacao') {
    (function criarPedido(){
      let cart = JSON.parse(localStorage.getItem('cart') || "[]")
      let itens = cart.map(item => {return {produto_id: item.id, quantidade: item.quantidadeDesejada}})
      console.log('array passado para a api', itens)

      axios.request({
        method: 'POST',
        url: '/pedidos',
        data: {
          itens: itens
        },
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        modalConfirm.value = true
        localStorage.setItem('id_pedidos', response.data.codigo)
        localStorage.setItem('total_geral', response.data.total_geral)
      })
      .catch(error => {
        console.log(error.response.data)
      })
    
    })()
  }
}

function payRequest(){
  // axios.request({
  //   method: 'POST',
  //   url: `/pedidos/${localStorage.getItem(id_pedidos)}/pagamento`,
  //   data: {
  //     'metodo': 'pix',
  //     'valor': localStorage.getItem('total_geral')
  //   },
  //   headers: {
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then(response => {
  //   console.log(response)
  // })
  // .catch(error => {
  //   console.log(error)
  // })
  modalPayed.value = true;
}

</script>


<template>
  <div class="container" id="container-finalizarCompra">
    <Entrega v-if="verifyState('entrega')" v-bind:="{changeState: () => changeState('entrega')}"></Entrega>
    <Pagamento v-if="verifyState('pagamento')" v-bind:="{changeState: () => changeState('pagamento')}"></Pagamento>
    <Confirmacao v-if="verifyState('confirmacao')" v-bind:="{changeState: () => changeState('confirmacao')}"></Confirmacao>
    <AlertaPagamento v-if="modalConfirm" v-bind:="{payRequest: () => payRequest()}"></AlertaPagamento>
    <AlertaConfirmacao v-if="modalPayed" v-bind:text="'Seu pedido foi pago! Ele começara a ser separado, te informaremos quando estiver pronto.'"></AlertaConfirmacao>
  </div>
</template>

<style lang="scss">

  
 


</style>
