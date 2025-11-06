<script setup>
import GestaoEditarItem from '@/components/modals/GestaoEditarItem.vue';
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const actualRote = useRoute()
const orderId = ref(actualRote.params.orderId)
const orderData = ref()

onMounted(() => {
    axios.request({
        method: 'GET',
        url: `/pedidos/${orderId.value}`,
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => {
        orderData.value = response.data
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
})

</script>

<template>
    <div class="container" id="wrapper-pedido">
        <div id="box-pedido" v-if="orderData">
            <div class="topo">
                <img src="../../assets/logo.png" alt="">
                <h1 class="titulo-gestao">{{ orderData.codigo }}</h1>
                <!-- <p>Cliente<a href="#" class="link">{{ orderData.user_name }}</a></p> -->
                <p>Cliente<a href="#" class="link"><RouterLink :to="{name: 'pedidosADM', params: {cliente: orderData.user_name}}">{{ orderData.user_name }}</RouterLink></a></p>
                <p>Status<a href="#" class="link">{{ orderData.status }}</a></p>
            </div>
            <!-- <div class="itens">
                <ul>
                    <li>Itens</li>

                    <li>Bolo de maçã</li>
                    <li>Bolo de Laranja</li>

                    <li>Subtotal:</li>
                </ul>
                <ul>
                    <li class="end">Valor Un.</li>

                    <li class="end">R$6,50</li>
                    <li class="end">R$12,50</li>

                    <li class="end">R$20,00</li>
                </ul>
                <ul>
                    <li class="end">QTD.</li>

                    <li class="end">5</li>
                    <li class="end">10</li>

                    <li class="end inv">.</li>                    
                </ul>
            </div> -->
            <div class="entrega">
                <p>Entrega<b>Tarifa</b></p>
                <p>Retirada no local<b>R$00,00</b></p>
            </div>
            <div class="pagamento">
                <p>Forma de pagamento<b>Tarifa</b></p>
                <p>PIX<b>R$00,00</b></p>
            </div>
            <p id="total">Total<b>R${{ orderData.total }}</b></p>
            <a href="#" class="btn-btn">Imprimir</a>
        </div>
    </div>

</template>

<style lang="scss">
    #wrapper-pedido{
        @include flex(row, center, center);
        min-height: calc(100vh - 60px);

        #box-pedido{
            width: 500px;
            box-shadow: 0px 4px 4px -3px $preto;
            border-radius: 15px;
            @include flex(column, start, center);
            padding: 32px;
            background-color: $branco
        }

        .topo{
            @include flex(column, center, start);
            width: 100%;
            margin-bottom: 32px;
            
            
                
                img{
                    width: 100px;
                    align-self: center;
                    margin-bottom: 16px;
                }

                .titulo-gestao{
                    font-size: 18px;
                    margin-bottom: 8px
                }

            }

    

            .itens{
                width: 100%;
                @include flex(row, space-between, center);

                .end{
                    text-align: end;
                    font-weight: bold;
                }

                ul li:first-child{
                    margin-bottom: 8px;
                }

                ul li:last-child{
                    margin: 8px 0 32px 0;
                }

                .inv{
                    visibility: hidden;
                }
            }

            p{
                @include flex(row, space-between, center);
                width: 100%;
                font-size: 14px;
                font-size: initial;
                color: $preto;

                b{
                    font-weight: bold;
                }
            }

            .entrega, .pagamento{
                width: 100%;
                margin-bottom: 32px;
            }

            #total{
                margin-bottom: 64px;
            }

            .btn{
                border: 2px solid $preto;
                color: $preto;
            }

        }

    
</style>