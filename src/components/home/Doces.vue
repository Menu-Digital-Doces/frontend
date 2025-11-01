<script setup>
    import DocesCards from './DocesCards.vue';
    
</script>

<template>
  <!-- <div id="doces">
    <h2 class="titulo">Confira os nossos <span class="destaque">doces</span></h2>
    <div id="doces-cards-wrapper" class="wrapper"> Wrapper
        <div class="container">
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>

        </div>

    </div>
    <div id="doces-cards-baixo" class="wrapper"> Wrapper
        <div class="container">
            <a class="btn" href="#">Ver todos</a>

        </div>

    </div>

  </div> -->

<section class="products-section">
        <div class="container">
            <h2 class="section-title">
                Confira os nossos <span class="pink-text">doces</span>
            </h2>

            <div class="products-grid">
                <!-- Linha 1 de produtos -->
                <div class="product-card">
                    <div class="product-image">
                        <!-- Imagem de placeholder para Brigadeiro -->
                        <img src="https://picsum.photos/seed/brigadeiro/400/600" alt="Brigadeiro">
                    </div>
                    <div class="product-info">
                        <p class="product-name">BRIGADEIRO</p>
                        <p class="product-description">Descrição doce</p>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <!-- Imagem de placeholder para Beijinho -->
                        <img src="https://picsum.photos/seed/beijinho/400/600" alt="Beijinho">
                    </div>
                    <div class="product-info">
                        <p class="product-name">BEIJINHO</p>
                        <p class="product-description">Descrição doce</p>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-image">
                        <!-- Imagem de placeholder para Bolo de Maçã -->
                        <img src="https://picsum.photos/seed/bolomaca/400/600" alt="Bolo de Maçã">
                    </div>
                    <div class="product-info">
                        <p class="product-name">BOLO DE MAÇÃ</p>
                        <p class="product-description">Descrição doce</p>
                    </div>
                </div>

                <!-- Linha 2 de produtos - Inicia a área rosa com a forma orgânica -->
                <div class="product-card large-card">
                    <div class="product-image">
                        <!-- Imagem de placeholder para Bolo de Cenoura -->
                        <img src="https://picsum.photos/seed/bolocenoura/400/600" alt="Bolo de Cenoura com Chocolate">
                    </div>
                    <div class="product-info">
                        <p class="product-name">BOLO DE CENOURA COM CHOCOLATE</p>
                        <p class="product-description">Descrição doce</p>
                    </div>
                </div>
                <div class="product-card large-card">
                    <div class="product-image">
                        <!-- Imagem de placeholder para Bolo de Chocolate -->
                        <img src="https://picsum.photos/seed/bolochocolate/400/600" alt="Bolo de Chocolate">
                    </div>
                    <div class="product-info">
                        <p class="product-name">BOLO DE CHOCOLATE</p>
                        <p class="product-description">Descrição doce</p>
                    </div>
                </div>
            </div>
            </div>
            </section>
</template>

<style lang="scss">
    #doces{
        background-color: red;

        h2{
            text-align: center;
        }
    
        #doces-cards-wrapper{
            background-color: yellow;
            height: 500px;

            .container{
                @include flex(row, space-between, center);
                gap: 50px;
                text-align: center;
                flex-wrap: wrap;
                
                @media (max-width: 768px){
                    overflow-x: auto;
                    flex-wrap: nowrap;
                    
                }
                
                
        }
        }

        #doces-cards-baixo{
            background-color: transparent;
            margin-top: 350px;
            height: 200px;
        
        }
    }

    
</style>
