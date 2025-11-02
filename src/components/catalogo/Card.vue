<script setup>
import { ref } from 'vue';



const { productData } = defineProps({productData: Object})

const desiredQuantity = ref(0);

function changeDesiredQuantity(operation){
    if(operation === 'aumentar'){
        desiredQuantity.value === productData.quantidade ? none : desiredQuantity.value++
    }else if(operation === 'diminuir'){
        desiredQuantity.value === 0 ? none : desiredQuantity.value--
    }
}

function addProductToCart(product){
    product.quantidadeDesejada = desiredQuantity;

    if(localStorage.getItem('cart') === null){
        localStorage.setItem('cart', JSON.stringify([product]))
    }else{
        let cart = JSON.parse(localStorage.getItem('cart') || "[]")
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    // console.log(JSON.parse(localStorage.getItem('cart') || "[]"))
}

</script>

<template>
    <div class="card-produto">
        <img :src="'/src/assets/1 - bolo de banana.png'" alt=""> <!--Imagem provisoria-->
        <div class="card-conteudo">
            <div class="card-topo">
                <h6 class="card-titulo">{{ productData.nome }}</h6>
                <span class="card-preco">R${{productData.preco}}</span>
            </div>
            <p class="card-descricao">{{ productData.descricao }}</p>
            <p class="card-estoque">Estoque: {{ productData.quantidade }}</p>
            <div class="card-acoes">
                <div class="controles-pedido">
                    <a href="#" class="btn-quantidade" @click.prevent="changeDesiredQuantity('diminuir')">-</a>
                     <input type="text" class="input-quantidade" :value="desiredQuantity" readonly/>
                    <a href="#" class="btn-quantidade" @click.prevent="changeDesiredQuantity('aumentar')">+</a>
                </div>
                <a href="#" class="btn-adicionar" @click.prevent="addProductToCart(productData)">Adicionar</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .card-produto{
        width: 350px; /* Ajustado para um tamanho mais comum em catálogos */
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
        background-color: $branco;
        transition: transform 0.3s ease;

        &:hover {
            transform: translateY(-5px);
        }

        img{
            width: 100%;
            height: 200px; /* Altura da imagem reduzida para dar mais destaque ao conteúdo */
            object-fit: cover;
            border-radius: 15px 15px 0 0;
        }

        .card-conteudo{
            padding: 16px;
            @include flex(column, space-between, start);
            min-height: 150px; /* Altura mínima para manter o layout consistente */
            
            .card-topo{
                @include flex(row, space-between, center);
                width: 100%;
                margin-bottom: 8px;

                .card-titulo{
                    text-transform: uppercase;
                    font-size: 16px;
                    font-weight: bold;
                    color: $marrom-escuro;
                    margin: 0;
                }

                .card-preco{
                    font-weight: bold;
                    color: $rosa-escuro;
                    font-size: 18px;
                }
            }
        
            .card-descricao{
                margin: 0 0 8px 0;
                font-size: 12px;
                color: $cinza-escuro;
                max-height: 36px; /* Limita a 3 linhas de texto */
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }

            .card-estoque{
                font-size: 10px;
                color: $cinza-escuro;
                margin-bottom: 16px;
            }

            .card-acoes{
                @include flex(row, space-between, center);
                width: 100%;

                .controles-pedido{
                    width: 100px;
                    @include flex(row, space-between, center);
                    border: 1px solid $cinza-claro;
                    border-radius: 20px;
                    padding: 4px;

                    .input-quantidade{
                        width: 30px;
                        text-align: center;
                        border: none;
                        background: none;
                        font-weight: bold;
                        color: $marrom-escuro;
                        padding: 0;
                    }

                    .btn-quantidade{
                        @include flex(row, center, center);
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background-color: $rosa-claro;
                        color: $branco;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 1;
                        transition: background-color 0.2s;

                        &:hover {
                            background-color: $rosa-medio;
                        }
                    }
                }

                .btn-adicionar{
                    background-color: $rosa-escuro;
                    color: $branco;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-weight: bold;
                    font-size: 14px;
                    transition: background-color 0.2s;

                    &:hover {
                        background-color: darken($rosa-escuro, 10%);
                    }
                }
            }
        }
    }
</style>