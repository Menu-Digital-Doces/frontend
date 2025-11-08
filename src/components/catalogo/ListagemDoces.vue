<script setup>
import { computed, onMounted, ref } from 'vue';
import Card from './Card.vue';
import axios from 'axios';

// 1. Inicialize 'data' como um array vazio.
// Isso evita erros no template antes da API retornar os dados.
const data = ref([]);

// onMounted busca os dados da API quando o componente é montado
onMounted(() => {
    axios.request({
        method: 'GET',
        url: '/produtos', // Seu endpoint da API
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => {
        // Atualiza a ref 'data' com os dados da resposta
        data.value = response.data;
        console.log("Dados recebidos:", response.data);
    })
    .catch(error => {
        console.error("Erro ao buscar produtos:", error);
        // É uma boa prática tratar o erro, talvez exibindo uma mensagem ao usuário
    });
});

const productsData = computed(() => {
    return data.value
})

// 2. Crie uma propriedade computada para filtrar apenas os DOCES.
// Assumi que seus produtos têm uma propriedade 'categoria'. Ajuste se o nome for outro.
// const docesFiltrados = computed(() => {
//     // O .filter só vai rodar se data.value tiver algo, evitando erros.
//     return data.value.filter(produto => produto.nome === 'Brigadeiro' || produto.nome === 'Beijinho');
// });

// // 3. Crie outra propriedade computada para filtrar apenas os BOLOS.
// const bolosFiltrados = computed(() => {
//     return data.value.filter(produto => produto.nome !== 'Brigadeiro' || produto.nome !== 'Beijinho');
// });

</script>

<template>
    <div class="container" id="listagem-doces">
        <div class="container-categoria">
            <h3 class="titulo-categoria">Todos os produtos</h3>
            <hr class="divisor-categoria">
            <div class="wrapper-cards">
                <Card v-for="productData in productsData" v-bind:productData="productData" :key="productData.id"></Card>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#listagem-doces{
        width: 100%;
        @include flex (column, center, start);
        gap: 48px; /* Espaçamento entre as categorias */
        padding-bottom: 120px;

        .container-categoria{
            @include flex (column, center, start);
            width: 100%;

            .titulo-categoria{
                margin-bottom: 8px;
                color: var(--marrom-escuro); // <-- Alterado
                font-size: 24px;
                font-weight: bold;
            }

            .divisor-categoria{
                border: 0;
                height: 2px;
                background-color: var(--cinza-escuro); // <-- Alterado
                margin-bottom: 16px;
            }
            
            
            .wrapper-cards{
                width: 100%;
                @include flex(row, start, stretch); /* Alinhamento centralizado e altura esticada */
                flex-wrap: wrap;
                padding: 32px 0;
                gap: 100px 48px; /* Espaçamento entre os cards */

                /* Responsividade */
                @media (min-width: 1200px){
                    justify-content: start; /* Distribui o espaço em telas maiores */
                }
                
                @media (max-width: 640px){
                    justify-content: center; /* Centraliza em telas muito pequenas */
                }
            }
        }
    }
</style>