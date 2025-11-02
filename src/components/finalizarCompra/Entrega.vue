<script setup>
import { reactive, ref } from 'vue';


const { changeState } = defineProps({
    changeState: Function
})
const activeCheck = ref([])

const option1 = 'estabelecimento'
const option2 = 'casa'

function saveDeliveryMethod(){
    if(activeCheck.value.length !== 0) {
        localStorage.setItem('deliveryMethod', activeCheck.value)
        changeState()
    } else{
        console.log('nenhuma caixa marcada')
    }
}

</script>

<template>
    <div id="finalizarCompra-entrega" class="container-entrega">
        <h1 class="titulo-secao">Selecione a forma de entrega</h1>
        <hr class="divisor-secao">
        <form @submit.prevent="saveDeliveryMethod">
            <label for="estabelecimento" class="opcao-entrega">
                <div class="conteudo-opcao">
                    <p class="titulo-opcao">Retirar no local</p>
                    <p class="endereco">Avenida Paulista, 395 - Centro, São Paulo, SP - Brasil</p>
                </div>
                <input type="radio" id="estabelecimento" :value="option1" v-model="activeCheck">
            </label>
            <label for="casa" class="opcao-entrega">
                <div class="conteudo-opcao">
                    <p class="titulo-opcao">Receber em casa</p>
                    <p class="endereco">Rua Exemplo, 123 - Bairro, Cidade, UF - Brasil</p>
                </div>
                <input type="radio" id="casa" :value="option2" v-model="activeCheck">
            </label>
            <button type="submit" class="btn-btn">Continuar</button>
        </form>
    </div>
</template>

<style lang="scss">
    #finalizarCompra-entrega{
        width: 100%;
        /* max-width: 500px; */
        margin: 60px auto;
        padding: 0 20px;
        /* background-color: $branco; */
        border-radius: 15px;
        /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); */
        min-height: calc(100vh - 280px);


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

        form{
            @include flex(column, start, center);
            gap: 20px;

            .opcao-entrega{
                @include flex(row, space-between, center);
                width: 100%;
                padding: 30px;
                border: 2px solid $cinza-claro;
                border-radius: 30px;
                cursor: pointer;
                transition: border-color 0.2s, background-color 0.2s;
                box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
                background-color: $branco;


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
                    margin-right: 15px;
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
                    @include flex(column, start, start);

                    .titulo-opcao{
                        /* font-weight: bold; */
                        color: $marrom-escuro;
                        font-size: 16px;
                        margin-bottom: 5px;
                    }

                    .endereco{
                        font-weight: bold;
                        font-size: 14px;
                        color: $marrom-escuro;
                    }
                }
            }

            .btn-btn{
                margin: 140px auto 0 auto;
            }
        }
    }
</style>
