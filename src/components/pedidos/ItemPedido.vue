<script setup>
import { TrashIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

// 1. Define as props e armazena o objeto reativo na variável 'props'
const props = defineProps({
    propStatePedido: {
        type: Boolean,
        required: true
    }, 
    productData: {
        type: Object,
        required: true
    },
    removeItemFromCart: {
        type: Function,
        required: true
    },
    decreaseQuantity: {
        type: Function,
        required: true
    },
    increaseQuantity: {
        type: Function,
        required: true
    },
    
})

function modificarQuantidade(operacao){
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

// 2. Acessa a prop 'propStatePedido' através da variável 'props'
var statePedido = ref(props.propStatePedido); 
/* true: item do carrinho aberto | false: item do carrinho finalizado */

// 3. Acessa a prop 'productData' através da variável 'props'
console.log(props.productData)

</script>

<template>
    <div class="item-pedido">
        <!-- Acessando as propriedades do productData via props.productData -->
        <img :src="props.productData.imagem"/>
        <div class="direita">
            <div class="topo">
                <h6>{{props.productData.nome||props.productData.nome_produto}}</h6>
                <!-- Chamando a função via props.removeItemFromCart e usando props.productData.id -->
                <a href="#" class="btn-close" v-show="statePedido==true" @click.prevent="props.removeItemFromCart(props.productData.id)"><TrashIcon/></a>
            </div>
            <p class="meio item-pedido-descricao">{{ props.productData.descricao || props.productData.descricao_produto }}</p>
            <p class="meio">{{ props.productData.quantidadeDesejada }}</p>
            <div class="baixo">
                <div class="controles-pedido" v-show="statePedido">
                    <!-- Acessando as propriedades via props.productData -->
                    <a href="#" class="btn" @click.prevent="decreaseQuantity(props.productData.id)">-</a><span>{{ props.productData.quantidadeDesejada }}</span><a href="#" class="btn" @click.prevent="increaseQuantity(props.productData.id)">+</a>
                </div>
                <!-- Acessando as propriedades via props.productData -->
                <p class="quantidade" v-show="statePedido==false">Quantidade: {{ props.productData.quantidadeDesejada || props.productData.quantidade }}</p>
                <h6>R${{ props.productData.preco || props.productData.total }}</h6>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .item-pedido{
        @include flex(row, start, stretch);
        width: 100%;
        box-shadow: 0px 4px 4px -3px var(--preto);
        border-radius: 25px;
        padding: 24px 24px;
        gap: 24px;
        background-color: var(--branco);

        img{
            width: 140px;
            height: 120px;
            object-fit: cover;
            object-position: bottom;
            border-radius: 20px;
        }

        .direita{
            width: 100%;
            @include flex(column, space-between, start);
            gap: 12px;

            .topo, .meio, .baixo{
                width: 100%;
                @include flex(row, space-between, center);    

            }
            
            h6{
                text-transform: uppercase;
                font-size: 14px;
                font-weight: bold;
                color: var(--marrom-escuro);
            }

            .btn-close{
                width: 18px;
            }

            p, span{
                font-size: 12px;
                color: var(--cinza-escuro);
            }
            

            .item-pedido-descricao{
                height: 20px;
                text-overflow: ellipsis;
                overflow: hidden;
                display: inline;
                vertical-align: start;
            }

            .controles-pedido{
                width: 90px;
                @include flex(row, space-between, center);

                .btn{
                    border: 2px solid var(--cinza-escuro);
                    padding: 2px 8px;
                    border-radius: 40px;
                    font-weight: bold;
                    color: var(--preto);
                }

                span{
                    font-size: 16px;
                    color: var(--preto);
                }

            }

        }

    }
</style>