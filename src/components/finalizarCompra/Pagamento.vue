<script setup>

import { reactive, ref } from 'vue';


const { changeState } = defineProps({
    changeState: Function
})
const activeCheck = ref([])

const option1 = 'pix'
const option2 = 'dinheiro'

function savePaymentMethod(){
    if(activeCheck.value.length !== 0) {
      localStorage.setItem('paymentMethod', activeCheck.value)
      changeState()
    } else{
      console.log('nenhuma caixa marcada')
    }
}

</script>

<template>
    <div id="finalizarCompra-pagamento" class="container-pagamento">
        <h1 class="titulo-secao">Selecione a forma de pagamento</h1>
        <hr class="divisor-secao">
        <form @submit.prevent="savePaymentMethod()">
            <div class="boxes">
              <label for="pix" class="opcao-pagamento">
                <div class="conteudo-opcao">
                  <img src="https://artpoin.com/wp-content/uploads/2023/09/artpoin-logo-pix-724x1024.png" alt="">
                  <p class="titulo-opcao">Pix</p>
                </div>
                <input type="radio" id="pix" :value="option1" v-model="activeCheck">
              </label>
              <label for="cartao" class="opcao-pagamento">
                <div class="conteudo-opcao">
                  <img src="https://cdn-icons-png.flaticon.com/512/2695/2695969.png" alt="">
                  <p class="titulo-opcao">Cartão de Crédito/Débito</p>
                </div>
                <input type="radio" id="cartao" :value="option2" v-model="activeCheck">
              </label>
            </div>
            <button type="submit" class="btn-btn">Próximo</button>
        </form>
    </div>
</template>

<style lang="scss">
    #finalizarCompra-pagamento{
        width: 100%;
        /* max-width: 500px; */
        margin: 0 auto;
        padding: 20px;
        /* background-color: $branco; */
        border-radius: 15px;
        /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); */
        padding-top: 60px;
        min-height: calc(100vh - 160px);


        .titulo-secao{
            font-size: 32px;
            font-weight: bold;
            color: $marrom-escuro;
            margin-bottom: 10px;
        }

        .divisor-secao{
            border: 0;
            height: 1px;
            background-color: $cinza-escuro;
            margin-bottom: 20px;
        }

        
        form{
          @include flex(column, center, center);
          gap: 60px;
          padding-top: 60px;
          
            .boxes{
              @include flex(row, center, center);
              gap: 40px;

              @media all and (max-width: 768px){
                flex-direction: column;
              }
            }
            .opcao-pagamento{
                @include flex(column, center, center);
                width: 250px;
                padding: 24px;
                border: 2px solid $cinza-claro;
                border-radius: 50px;
                background-color: $branco;
                cursor: pointer;
                transition: border-color 0.2s, background-color 0.2s;

                &:has(input:checked){
                    border-color: $rosa-escuro;
                    background-color: lighten($rosa-claro, 10%);
                }

                input[type="radio"]{
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border: 2px solid $cinza-escuro;
                    border-radius: 50%;
                    margin-top: 20px;
                    position: relative;
                    flex-shrink: 0;

                    &:checked{
                        border-color: $rosa-escuro;
                        &::after{
                            content: '';
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 10px;
                            height: 10px;
                            border-radius: 50%;
                            background-color: $rosa-escuro;
                        }
                    }
                }

                .conteudo-opcao{
                    @include flex(column, center, center);
                    
                    img{
                      width: 100%;
                      height: 100px;
                      max-width: 100px;
                    }

                    .titulo-opcao{
                        color: $marrom-escuro;
                        font-size: 14px;
                        margin: 5px 0;
                    }

                }
            }

            .btn-btn{
                margin: 70px auto 0 auto;
            }
        }
    }
</style>