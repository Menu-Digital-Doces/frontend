<script setup></script>

<template>
  <div id="finalizarCompra-confirmacao">
    <h1>Selecione a forma de entrega</h1>
    <hr />
    <ul>
      <div>
        <p>Resumo de itens</p>
        <li>Brigadeiro<span>qtd</span></li>
        <li>Bolo de laranja<span>qtd</span></li>
        <li>Bolo de banana<span>qtd</span></li>
      </div>
      <div>
        <p>Entrega</p>
        <li>Retirar no local <span>R$0</span></li>
      </div>
      <div>
        <p>Forma de pagamento</p>
        <li>Pix</li>
      </div>
    </ul>
  </div>
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
