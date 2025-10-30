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
    <div class="card">
        <img :src="`/src/assets/${productData.imagem}`" alt="">
        <div class="card-texts">
            <h6>{{ productData.nome }}<span>R${{productData.preco}}</span></h6>
            <p class="descricao">{{ productData.descricao }}</p>
            <p class="estoque">Estoque: {{ productData.quantidade }}</p>
            <div class="baixo">
                <div class="controles-pedido">
                    <a href="#" class="btn-option" @click.prevent="changeDesiredQuantity('diminuir')">-</a>
                    <!-- <span>{{desiredQuantity}}</span> -->
                     <input type="value" :value="desiredQuantity"/>
                    <a href="#" class="btn-option" @click.prevent="changeDesiredQuantity('aumentar')">+</a>
                </div>
                <a href="#" class="btn" @click.prevent="addProductToCart(productData)">Adicionar</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .card{
        width: 350px;
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 0px 4px 4px -3px $preto;

        img{
            width: 100%;
            height: 350px;
            object-fit: cover;
         
        }

        .card-texts{
            padding: 24px;
            height: 300px;
            
            h6{
                @include flex(row, space-between, center);
                text-transform: uppercase;
                font-size: 18px;
                font-weight: bold;
                color: $marrom-escuro;

                span{
                    font-weight: bold;
                }
            }
        
            p{
                margin: 16px 0;
                font-size: 14px;
                color: $cinza-escuro;
            }

            .descricao{
                max-height: 100px;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            .estoque{

            }

            .baixo{
                @include flex(row, space-between, center);

                .controles-pedido{
                    width: 90px;
                    @include flex(row, space-between, center);

                    input[type="value"]{
                        width: 10px;
                        /* background-color: red; */
                        border: none;
                    }

                    .btn-option{
                        border: 2px solid $cinza-escuro;
                        padding: 2px 8px;
                        border-radius: 40px;
                        font-weight: bold;
                        color: $preto;
                    }

                    span{
                        font-size: 16px;
                        color: $preto;
                    }

            }

                .btn{
                    color: $rosa-escuro;
                    border: solid 2px $rosa-escuro;
                }

            }
        }
    }
</style>