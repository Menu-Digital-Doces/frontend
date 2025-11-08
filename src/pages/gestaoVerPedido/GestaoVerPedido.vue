<script setup>
import GestaoEditarItem from '@/components/modals/GestaoEditarItem.vue';
import axios from 'axios';
import { onMounted, ref, watch, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const actualRote = useRoute()
const orderCode = ref(actualRote.params.orderId)
const orderData = ref([])

const subtotalCalculado = computed(() => {
    if (!orderData.value || orderData.value.length === 0) {
        return 0.00;
    }

    // Acessa o array de itens do pedido (orderData.value) e usa reduce para somar
    // o total de cada item (preco_unitario * quantidade).
    const total = orderData.value.reduce((acc, item) => {
        // Converte para número e garante que não há NaN
        const preco = parseFloat(item.preco_unitario) || 0;
        const quantidade = parseInt(item.quantidade) || 0;
        
        // O campo 'total' no seu objeto mesclado (linha 52) já é o subtotal do item.
        // Se você quer o subtotal total, basta somar o campo 'total' de cada item.
        // Se o campo 'total' não existe ou não é o que você quer, use:
        // return acc + (preco * quantidade);
        
        // Assumindo que o campo 'total' no seu objeto mesclado (linha 52) é o subtotal do item:
        const itemTotal = parseFloat(item.total) || 0;
        return acc + itemTotal;

    }, 0);

    // Retorna o total formatado para duas casas decimais
    return total.toFixed(2);
});

onMounted(async () => {
    
    try {
        // 1. Executa as duas chamadas de API em paralelo para otimizar o tempo de carregamento
        const [pedidoResponse, produtosResponse] = await Promise.all([
            axios.request({
                method: 'GET',
                url: `/pedidos/${orderCode.value}`,
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
        // return dadosDoPedidoMesclados;
        orderData.value = dadosDoPedidoMesclados

    } catch (error) {
        console.error("Erro ao carregar e processar o pedido:", error);
        return []; // Retorna um array vazio em caso de erro
    }

})

</script>


<template>
    <div class="container" id="wrapper-pedido">
        <div id="box-pedido" v-if="orderData && orderData.length > 0">
            <div class="topo">
                <img src="../../assets/logo.png" alt="">
                <h1 class="titulo-gestao">{{ orderData[0].codigo }}</h1>
                <p>Cliente<a href="#" class="link" v-if="orderData[0].user_name"><RouterLink :to="{name: 'pedidosADM', params: {cliente: orderData[0].user_name}}">{{ orderData[0].user_name }}</RouterLink></a></p>
                <p>Status<a id="status">{{ orderData[0].status }}</a></p>
            </div>
            <div class="itens">
                <ul>
                    <li>Itens</li>

                    <li class="end" v-for="pedido in orderData">{{pedido.nome_produto}}</li>

                    <li>Subtotal:</li>
                </ul>
                <ul>
                    <li class="end">Valor Un.</li>

                    <li class="end" v-for="pedido in orderData">R${{ pedido.preco_unitario }}</li>


                    <li class="end">{{ subtotalCalculado }}</li>
                </ul>
                <ul>
                    <li class="end">QTD.</li>

                    <li class="end" v-for="pedido in orderData">{{pedido.quantidade}}</li>


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
            <p id="total">Total<b>R${{ subtotalCalculado }}</b></p>
            <a href="#" class="btn-btn">Imprimir</a>
        </div>
    </div>

</template>

<style lang="scss">
    #wrapper-pedido{
        @include flex(row, center, center);
        min-height: calc(100vh - 60px);
        padding: 60px 0;

        #box-pedido{
            width: 500px;
            box-shadow: 0px 4px 4px -3px var(--preto);
            border-radius: 15px;
            @include flex(column, start, center);
            padding: 32px;
            background-color: var(--branco)
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

                .link *{
                    color: var(--azul)
                }

                #status{
                    color: var(--preto);
                }
            }

    

            .itens{
                width: 100%;
                @include flex(row, space-between, center);

                .end{
                    text-align: end;
                    font-weight: bold;
                    color: var(--preto);
                }

                ul li:first-child{
                    margin-bottom: 8px;
                    color: var(--preto);
                
                }

                ul li:last-child{
                    margin: 8px 0 32px 0;
                    color: var(--preto);
               
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
                color: var(--preto);

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
                border: 2px solid var(--preto);
                color: var(--preto);
            }

        }

    
</style>