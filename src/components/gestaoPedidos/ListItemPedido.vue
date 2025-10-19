<script setup>

    const { status } = defineProps({status: Number})

    const statusList = {
        2: "Pendente",
        3: "Em produção",
        4: "Entregue",
    }

    function compare(){
        return status === 2 ? 'st-red' : status === 3 ? 'st-yellow' : 'st-green'
    }

</script>

<template>
    <li class="list-item-pedido">
        <div>
            <span class="link"><a href="#">Ver</a></span>
            <span class="item-num-pedido">Nº pedido</span>

        </div>
        <div>
            <span class="item-valor-pedido">Valor</span>
            <span class="item-status-pedido" :class="compare()">{{ statusList[status] }}</span>
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
