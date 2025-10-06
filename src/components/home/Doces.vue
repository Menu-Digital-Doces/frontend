<script setup>
    import DocesCards from './DocesCards.vue';
    
</script>

<template>
  <div id="doces">
    <h2 class="titulo">Confira os nossos <span class="destaque">doces</span></h2>
    <div id="doces-cards-wrapper" class="wrapper"> <!--Wrapper-->
        <div class="container">
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>

        </div>

    </div>
    <div id="doces-cards-baixo" class="wrapper"> <!--Wrapper-->
        <div class="container">
            <a class="btn" href="#">Ver todos</a>

        </div>

    </div>

  </div>
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
