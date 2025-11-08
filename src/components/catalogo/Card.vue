<script setup>
import { ref } from 'vue';
    import { ShoppingCartIcon } from '@heroicons/vue/24/outline'




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
        
        // Procura se o produto já existe no carrinho
        const existingProductIndex = cart.findIndex(item => item.id === product.id)
        
        if(existingProductIndex !== -1){
            // Sobrescreve o produto inteiro ao invés de apenas alterar a quantidade
            cart[existingProductIndex] = product
        }else{
            // Se não existe, adiciona ao carrinho
            cart.push(product)
        }
        
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    // console.log(JSON.parse(localStorage.getItem('cart') || "[]"))
}

</script>

<template>
    <div class="card-produto">
        <img :src="productData.imagem" alt=""> <!--Imagem provisoria-->
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
                <a href="#" class="btn-adicionar" @click.prevent="addProductToCart(productData)"><ShoppingCartIcon class="icone"></ShoppingCartIcon>Adicionar</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.card-produto{
	        width: 350px; /* Ajustado para um tamanho mais comum em catálogos */
	        border-radius: 35px;
	        overflow: hidden;
	        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
	        background-color: var(--branco);
	        transition: transform 0.3s ease;
	
	        &:hover {
	            transform: translateY(-5px);
	        }
	
	        img{
	            width: 100%;
	            height: 400px; /* Altura da imagem reduzida para dar mais destaque ao conteúdo */
	            object-fit: cover;
	            object-position: bottom;
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
	                    color: var(--marrom-escuro);
	                    margin: 0;
	                }
	
	                .card-preco{
	                    font-weight: bold;
	                    color: var(--marrom-escuro);
	                    font-size: 18px;
	                }
	            }
	        
	            .card-descricao{
	                display: block;
	                margin: 0 0 8px 0;
	                font-size: 14px;
	                font-weight: 200;
	                color: var(--cinza-escuro);
	                max-height: 36px; /* Limita a 3 linhas de texto */
	                overflow: hidden;
	                text-overflow: ellipsis;
	                display: -webkit-box;
	                -webkit-line-clamp: 3;
	                -webkit-box-orient: vertical;
	                margin-bottom: 30px;
	                width: 100%;
	            }
	
	            .card-estoque{
	                font-size: 14px;
	                font-weight: 200;
	                color: var(--cinza-escuro);
	                margin-bottom: 16px;
	            }
	
	            .card-acoes{
	                @include flex(row, space-between, center);
	                width: 100%;
	
	                .controles-pedido{
	                    width: 100px;
	                    @include flex(row, space-between, center);
	                    border: 1px solid transparent;
	                    border-radius: 20px;
	                    padding: 4px;
	
	                    .input-quantidade{
	                        width: 30px;
	                        text-align: center;
	                        border: none;
	                        background: none;
	                        font-weight: normal;
	                        color: var(--preto);
	                        padding: 0;
	                        font-size: 18px
	                    }
	
	                    .btn-quantidade{
	                        @include flex(row, center, center);
	                        width: 24px;
	                        height: 24px;
	                        border-radius: 50%;
	                        background-color: var(--branco);
	                        border: 2px solid var(--cinza-escuro);
	                        color: var(--preto);
	                        font-weight: bold;
	                        font-size: 14px;
	                        line-height: 1;
	                        transition: background-color 0.2s;
	
	                        &:hover {
	                            background-color: var(--cinza-escuro);
	                            color: var(--branco);
	                    }
	                    }
	                }
	
	                .btn-adicionar{
	                    background-color: var(--branco);
	                    color: var(--rosa-escuro);
	                    border: 2px solid var(--rosa-escuro);
	                    padding: 8px 16px;
	                    border-radius: 15px;
	                    font-weight: bold;
	                    font-size: 14px;
	                    transition: background-color 0.2s;
	                    @include flex(row, center, center);
	
	                    .icone{
	                        width: 16px;
	                        height: 16px;
	                        display: inline;
	                        margin-right: 8px;
	                        color: var(--rosa-escuro);
	                    }
	
	                    &:hover {
	                        background-color: var(--rosa-escuro);
	                        color: var(--branco);
	
	                        .icone{
	                            color: var(--branco);
	                        }
	                    }
	                }
	            }
	        }
	    }
</style>