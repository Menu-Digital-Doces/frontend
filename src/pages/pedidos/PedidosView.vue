
<script setup>
import CardPedido from '@/components/pedidos/CardPedido.vue';
import ItemPedido from '@/components/pedidos/ItemPedido.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
 
const propPagePedidos = defineProps({propPagePedidos: Boolean})
var statePagePedidos = ref(propPagePedidos.propPagePedidos); /* true: página carrinho aberto | false: página carrinho finalizado */

const actualRote3 = useRoute()
const orderId3 = ref(actualRote3.params.orderId)
const orderData3 = ref([])

onMounted(() => {
    axios.request({
        method: 'GET',
        url: `/pedidos/${orderId3.value}`,
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => {
        orderData3.value = response.data
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
})

</script>

<template>
    <div class="container" id="pagina-detalhe-pedido" v-if="orderData3">
        <!-- <h1 class="titulo-pagina">{{ orderData3.codigo }}</h1> -->
        <h1 class="titulo-pagina">Código do pedido</h1>
        <hr class="divisor-pagina">
        <div class="lista-itens-pedido">
            <!--Primeiro item só renderizará quando receber os dados do servidor-->
            <ItemPedido v-for="item in orderData3.itens" :key="item.id" v-bind:="{propStatePedido: false, productData: item}"></ItemPedido> 
            <!-- Linhas abaixo provisórias -->
            <ItemPedido v-bind:="{propStatePedido: false, productData: {id: 99, nome: 'Bolo de Banana', descricao: 'Perfeito para o café da tarde. Um bolo caseiro, macio e fofinho, com pedacinhos de banana e um toque de canela.', quantidade: 1, quantidadeDesejada: 2, preco: 15.00, imagem: '/src/assets/1 - bolo de banana.png'}}"></ItemPedido>
            <ItemPedido v-bind:="{propStatePedido: false, productData: {id: 99, nome: 'Brigadeiro', descricao: 'Nosso clássico favorito, feito com o mais puro cacau e um toque especial de carinho. A massa é cremosa e o sabor é inesquecível, derretendo na boca a cada mordida!', quantidade: 20, quantidadeDesejada: 1, preco: 6.50, imagem: '/src/assets/6 - brigadeiro.png'}}"></ItemPedido>
            <ItemPedido v-bind:="{propStatePedido: false, productData: {id: 99, nome: 'Bolo de Cenoura com Cobertura de Chocolate', descricao: 'A combinação que todos amam. O bolo de cenoura, macio e úmido, encontra uma generosa e irresistível cobertura de brigadeiro.  ', quantidade: 3, quantidadeDesejada: 1, preco: 50.00, imagem: '/src/assets/4 - bolo de canoura com chocolate.png'}}"></ItemPedido>
        </div>
        <hr class="divisor-pagina">
        <p class="subtotal-pedido">Subtotal <span>R$96,50</span></p>

        <a href="#" class="btn-acao-pedido" v-show="statePagePedidos">Finalizar pedido</a>
        
    </div>
</template>

<style lang="scss">
    #pagina-detalhe-pedido{
        width: 100%;
        @include flex(column, start, start);
        padding-top: 50px;
        min-height: calc(100vh - 160px);


        .titulo-pagina{
            font-weight: bold;
            color: $marrom-escuro;
            font-size: 32px;
            margin-bottom: 10px;
        }

        .divisor-pagina{
            border: 0;
            height: 1px;
            background-color: $cinza-claro;
            margin-bottom: 20px;
        }
    
        .lista-itens-pedido{
            width: 100%;
            @include flex(column, center, center);
            gap: 50px; 
            padding-bottom: 30px;
        }

   
        .subtotal-pedido{
            width: 100%;
            @include flex(row, space-between, center);
            font-weight: bold;
            font-size: 18px;
            color: $marrom-escuro;
            margin-bottom: 64px;

            span{
                font-weight: bold;
             
            }
        }

        .btn-acao-pedido{
            background-color: $rosa-escuro;
            color: $branco;
            padding: 10px 30px;
            border-radius: 25px;
            font-weight: bold;
            align-self: center;
            margin: 40px 0 20px 0;
            transition: background-color 0.2s;

            &:hover {
                background-color: darken($rosa-escuro, 10%);
            }
        }
    }
</style>