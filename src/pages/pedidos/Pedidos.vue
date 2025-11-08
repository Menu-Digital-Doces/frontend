<script setup>
import CardPedido from '@/components/pedidos/CardPedido.vue';
import ItemPedido from '@/components/pedidos/ItemPedido.vue';
import { ArrowUturnLeftIcon } from '@heroicons/vue/24/outline';
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';


// const propPagePedidos = defineProps({propPagePedidos: Boolean})
// var statePagePedidos = ref(propPagePedidos.propPagePedidos); /* true: página carrinho aberto | false: página carrinho finalizado */

const data = ref([])
const dataPedido = ref([])
const activeState = ref('Pedidos')

function changeState(state, zerarState){
    activeState.value = state
    zerarState === true ? dataPedido.value = [] : ''
}

async function carregarpedido(cod_pedido) {
    console.log(cod_pedido)
    try {
        // 1. Executa as duas chamadas de API em paralelo para otimizar o tempo de carregamento
        const [pedidoResponse, produtosResponse] = await Promise.all([
            axios.request({
                method: 'GET',
                url: `/pedidos/${cod_pedido}`,
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }),
            axios.request({
                method: 'GET',
                url: `/produtos`,
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        ]);

        // 2. Extrai os dados
        const itensDoPedido = pedidoResponse.data; // Array de itens do pedido
        const todosOsProdutos = produtosResponse.data; // Array de todos os produtos

        // 3. Cria um mapa (objeto) de produtos para acesso rápido (chave: id do produto)
        const produtosMap = todosOsProdutos.reduce((acc, produto) => {
            acc[produto.id] = produto;
            return acc;
        }, {});

        // 4. Mapeia os itens do pedido e junta com os dados do produto correspondente
        const dadosDoPedidoMesclados = itensDoPedido.map(itemPedido => {
            // Encontra o produto usando o produto_id do item do pedido
            const produto = produtosMap[itemPedido.produto_id];

            // Retorna o objeto mesclado
            return {
                ...itemPedido, // Dados do item do pedido (id, user_id, produto_id, total, quantidade)
                
                // Dados do produto (com tratamento para caso o produto não seja encontrado)
                nome_produto: produto ? produto.nome : 'Produto Não Encontrado',
                descricao_produto: produto ? produto.descricao : 'N/A',
                preco_unitario: produto ? produto.preco : '0.00',
                imagem: produto ? produto.imagem : 'caminho/para/imagem/padrao.png' 
                // Adicione outros campos do produto que você precisar
            };
        });

        // 5. Retorna o array final de objetos mesclados
        return dadosDoPedidoMesclados;

    } catch (error) {
        console.error("Erro ao carregar e processar o pedido:", error);
        return []; // Retorna um array vazio em caso de erro
    }
}

// Para usar a função e obter o valor:
async function executarBusca(cod_pedido) {
    const dadosDoPedido = await carregarpedido(cod_pedido);
    if (dadosDoPedido) {
        console.log("Dados recebidos:", dadosDoPedido);
        dataPedido.value = dadosDoPedido
        changeState('Itens')
        // Aqui você pode atribuir os dados às suas variáveis reativas (ref)
        // pedido.value = dadosDoPedido.pedido;
        // dataPedido.value = dadosDoPedido.item;
    }
}

// executarBusca('PED-20251107-TNANPV');
onMounted(() => {
    axios.request({
        method: 'GET',
        url: '/pedidos',
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => {
        data.value = response.data
    })
    .catch(error => {
        console.log(error)
    })
})


</script>

<template>
    <div class="container" id="pagina-pedidos" v-if="data">
        <div class=cima>
            <h1 class="titulo-pagina" v-if="dataPedido.length === 0">Meus pedidos</h1>
            <h1 class="titulo-pagina" v-if="dataPedido.length > 0">{{ dataPedido[0].codigo }}</h1>
            <a href="" id="back" @click.prevent="changeState('Pedidos', true)"  v-if="dataPedido.length > 0" ><ArrowUturnLeftIcon/></a>
        </div>
        <hr class="divisor-pagina">
            <div v-if="activeState === 'Pedidos'" class="lista-pedidos">
                <CardPedido 
                    v-for="pedido in data" 
                    :key="pedido.id"
                    :data="pedido" 
                    :executarBusca="executarBusca"
                />
            </div>

            <div v-if="activeState === 'Itens'" class="lista-pedidos">
                <ItemPedido
                    v-for="pedido in dataPedido"
                    :key="pedido.id"
                    :prop-state-pedido="false"
                    :product-data="pedido"
                />
            </div>
            <p v-if="data.length===0" id="notOrder">Não há pedidos</p>
        </div>

</template>

<style lang="scss">
    #pagina-pedidos{
        width: 100%;
        @include flex(column, start, start);
        padding-top: 50px;

        .cima{
            width: 100%;
            @include flex(row,space-between, center);
           
            #back{
                width: 24px;
                height: 24px;
                font-size: 24px;
                color: var(--marrom-escuro);
                cursor: pointer;
            }
        }

        .titulo-pagina{
            font-weight: bold;
            color: var(--marrom-escuro);
            font-size: 32px;
            margin-bottom: 10px;
        }

        .divisor-pagina{
            border: 0;
            height: 1px;
            background-color: var(--cinza-claro);
            margin-bottom: 20px;
        }
    
        .lista-pedidos{
            width: 100%;
            @include flex(column, start, center);
            gap: 50px; 
            padding-bottom: 30px;
            min-height: calc(100vh - 160px);
        }

        #notOrder{
            color: var(--cinza-claro);
        }
    }
</style>