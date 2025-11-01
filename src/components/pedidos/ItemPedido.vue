<script setup>
import { TrashIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';


const { propStatePedido, productData, removeItemFromCart} = defineProps({
    propStatePedido: Boolean, 
    productData: Object,
    removeItemFromCart: Function
})

var statePedido = ref(propStatePedido); /* true: item do carrinho aberto | false: item do carrinho finalizado */

console.log(productData)

</script>

<template>
    <div class="item-pedido">
        <img src="../../assets/1 - bolo de banana.png"/>
        <div class="direita">
            <div class="topo">
                <h6>{{productData.nome}}</h6>
                <a href="#" class="btn-close" v-show="statePedido==true" @click.prevent="removeItemFromCart(productData.id)"><TrashIcon/></a>
            </div>
            <p class="meio item-pedido-descricao">{{ productData.descricao }}</p>
            <p class="meio">Estoque: {{ productData.quantidade }}</p>
            <div class="baixo">
                <div class="controles-pedido" v-show="statePedido==true">
                    <a href="#" class="btn">-</a><span>{{ productData.quantidadeDesejada }}</span><a href="#" class="btn">+</a>
                </div>
                <p class="quantidade" v-show="statePedido==false">Quantidade: {{ productData.quantidadeDesejada }}</p>
                <h6>R${{ productData.preco }}</h6>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .item-pedido{
        @include flex(row, start, stretch);
        width: 100%;
        box-shadow: 0px 4px 4px -3px $preto;
        border-radius: 25px;
        padding: 24px 24px;
        gap: 24px;
        

        img{
            width: 140px;
            height: 120px;
            object-fit: cover;
            object-position: bottom;
            border-radius: 20px;
        }

        .direita{
            width: 100%;
            @include flex(column, space-between, start);
            gap: 12px;

            .topo, .meio, .baixo{
                width: 100%;
                @include flex(row, space-between, center);    

            }
            
            h6{
                text-transform: uppercase;
                font-size: 14px;
                font-weight: bold;
                color: $marrom-escuro;
            }

            .btn-close{
                width: 18px;
            }

            p, span{
                font-size: 12px;
                color: $cinza-escuro;
            }
            

            .item-pedido-descricao{
                height: 20px;
                text-overflow: ellipsis;
                overflow: hidden;
                display: inline;
                vertical-align: start;
            }

            .controles-pedido{
                width: 90px;
                @include flex(row, space-between, center);

                .btn{
                    border: 2px solid $cinza-escuro;
                    padding: 2px 8px;
                    border-radius: 40px;
                    font-weight: bold;
                    color: $preto;
                }

                span{
                    font-size: 16px;
                    color: $preto;
                }

            }

        }

    }
</style>