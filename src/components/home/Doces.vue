<script setup>
    import DocesCards from './DocesCards.vue';
    
</script>

<template>
  <div id="doces">
    <div id="doces-cima">
        <div class="container">
            <h2 class="titulo">Confirxa os nossos <span class="destaque">doces</span></h2>

        </div>

    </div>
    <div id="doces-meio">
        <div class="container">
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>

        </div>
    </div>
    <div id="doces-meio-baixo">
        <div class="container">
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>
            
        </div>
    </div>
    <div id="doces-baixo">
      
        <a class="btn" href="#">Ver todos</a>
    </div>
    <img id="fundo-home" src="@/assets/fundohome.png" alt="">

  </div>

</template>

<style lang="scss">
    #doces{
        overflow-x: hidden;

        #doces-cima{
            background-color: transparent;
            height: 250px;

            .container{
                position: relative;
                left: 0;
            }
        }
        #doces-meio{
            background-color: $cinza-claro;
            height: 450px;
            position: relative;

            .container{
                position: relative;
                left: 0;
            }
        }
        #doces-meio-baixo{
            /* background-color: $rosa-medio; */
            height: 0px;
            position: relative;
            
            .container{
                position: relative;
                left: 0;
                @include flex(row, space-evenly, center);
                height: 0px;
            }
            
        }
        #doces-baixo{
            background-color: $rosa-medio;
            padding-top: 300px;
            @include flex(row, center, center);
            z-index: 2;


            a{
                margin-bottom: 10px;
            }
            
        }
        #fundo-home{
            width: 150vw;
            position: absolute;
            left: -25%;
            z-index: 1;
            overflow-x: hidden;
            margin-top: -20px;
        }
    }
    
</style>
