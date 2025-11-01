<script setup>
import { RouterLink } from 'vue-router';


    const { pedido } = defineProps({pedido: Object})

    const statusList = {
        2: "Pendente",
        3: "Em produção",
        4: "Entregue",
    }

    function compare(status){
        return status === statusList[2] ? 'st-red' : 
        status === 3 ? statusList[3] :
        'st-green'
    }

</script>

<template>
    <li class="list-item-pedido">
        <div>
            <span class="link"><a href="#" class="link"><RouterLink :to="{name: 'pedidoADM', params: {orderId: pedido.id}}">Ver</RouterLink></a></span>
            <span class="item-num-pedido">{{ pedido.codigo }}</span>

        </div>
        <div>
            <span class="item-valor-pedido">Valor</span>
            <span class="item-status-pedido" :class="compare(pedido.status)">{{ pedido.status }}</span>
        </div>
    </li>
</template>

<style lang="scss">
    .list-item-pedido{
        @include flex(row, space-between, center);
        padding: 16px 24px;
        margin-bottom: 32px;
        background-color: $branco;
        border-radius: 10px;

        div{
            @include flex(row, start, center);
            gap: 32px;
        }

        .item-num-pedido{
            color: $marrom-escuro;
            font-weight: 100;
        }

        .item-valor-pedido{
            color: $preto;
            font-weight: bold;
            text-transform: uppercase;
        }

        .item-status-pedido{
            font-weight: 300;
        }

        .st-green{
            color: $verde;
        }

        .st-red{
            color: $vermelho;
        }

        .st-yellow{
            color: $amarelo;
        }
    }
</style>
