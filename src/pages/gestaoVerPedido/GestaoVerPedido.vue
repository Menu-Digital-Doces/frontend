<script setup>
import GestaoEditarItem from '@/components/modals/GestaoEditarItem.vue';


</script>

<template>
    <div class="container" id="wrapper-pedido">
        <div id="box-pedido">
            <div class="topo">
                <img src="../../assets/logo.png" alt="">
                <h1 class="titulo-gestao">Pedido nº 0123456</h1>
                <p>Cliente<a href="#" class="link">Felipe Santos</a></p>
            </div>
            <div class="itens">
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
            </div>
            <div class="entrega">
                <p>Entrega<b>Tarifa</b></p>
                <p>Retirada no local<b>R$00,00</b></p>
            </div>
            <div class="pagamento">
                <p>Forma de pagamento<b>Tarifa</b></p>
                <p>PIX<b>R$00,00</b></p>
            </div>
            <p id="total">Total<b>R$20,00</b></p>
            <a href="#" class="btn">Imprimir</a>
        </div>
    </div>

    <GestaoEditarItem></GestaoEditarItem> <!-- Provisório aqui -->
</template>

<style lang="scss">
    #wrapper-pedido{
        @include flex(row, center, center);

        #box-pedido{
            width: 500px;
            box-shadow: 0px 4px 4px -3px $preto;
            border-radius: 15px;
            @include flex(column, start, center);
            padding: 32px;

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

    }
</style>