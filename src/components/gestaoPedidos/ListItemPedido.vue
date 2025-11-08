<script setup>
import { RouterLink } from 'vue-router';


    const { pedido } = defineProps({pedido: Object})

    const statusList = {
        2: "Pendente",
        3: "Confirmado",
        4: "Entregue",
    }

    function compare(status){
        console.log(status)
        return status === statusList[2] ? 'st-red' : 
        status === statusList[3] ? 'st-yellow' :
        'st-green'
    }

</script>

<template>
    <li class="list-item-pedido">
        <div class="left">
            <span class="link"><a href="#" class="link"><RouterLink :to="{name: 'pedidoADM', params: {orderId: pedido.codigo}}" :style="{'color': '#007bff', 'font-weight': 'bold'}">VER</RouterLink></a></span>
            <span class="item-num-pedido">{{ pedido.codigo }}</span>

        </div>
        <div class="right">
            <span class="item-valor-pedido">R$20,00</span>
            <span class="item-status-pedido" :class="compare(pedido.status)">{{ pedido.status }}</span>
        </div>
    </li>
</template>

<style lang="scss">
    .list-item-pedido{
        @include flex(row, space-between, center);
        padding: 24px 24px;
        margin-bottom: 32px;
        background-color: var(--branco);
        border-radius: 10px;

        div{
            @include flex(row, space-between, center);
            gap: 32px;
        
            &.left{
                width: calc(55% - 32px);
                justify-content: start;
            }
            &.right{
                width: calc(45% - 32px);
                justify-content: end;
                
                span{
                    flex: 1;
                }
            }

             
        }

        .item-num-pedido{
            color: var(--marrom-escuro);
            font-weight: 400;
        }

        .item-valor-pedido{
            color: var(--preto);
            font-weight: bold;
            text-transform: uppercase;
        }

        .item-status-pedido{
            font-weight: 300;
        }

        .st-green{
            color: var(--verde);
        }

        .st-red{
            color: var(--vermelho);
        }

        .st-yellow{
            color: var(--amarelo);
        }

        @media all and (max-width: 768px){
      
            height: 120px;
            padding: 0 24px;

            div{
                height: 100%;
            }
        }
    }
</style>
