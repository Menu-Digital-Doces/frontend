<script setup>
    import { reactive } from 'vue';
import DocesCards from './DocesCards.vue';
import { ref, onMounted, onUnmounted } from 'vue';


const windowWidth = ref(window.innerWidth);
const windowHeight = ref(window.innerHeight);


const updateWindowSize = () => {
  windowWidth.value = window.innerWidth;
  windowHeight.value = window.innerHeight;
};


onMounted(() => {
  window.addEventListener('resize', updateWindowSize);
});


onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize);
});

    
</script>

<template>
  <div id="doces">
    <div id="doces-cima">
        <div class="container">
            <h2 class="titulo">Confira os nossos <span class="destaque">doces</span></h2>

        </div>

    </div>
    <div id="doces-meio">
        <div class="container">
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>
            <DocesCards></DocesCards>
            <DocesCards v-if="windowWidth<=968"></DocesCards>
            <DocesCards v-if="windowWidth<=968"></DocesCards>

        </div>
    </div>
    <div id="doces-meio-baixo">
        <div class="container">
            <DocesCards v-if="windowWidth>968"></DocesCards>
            <DocesCards v-if="windowWidth>968"></DocesCards>


            
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
      
            margin-bottom: 50px;

            .container{
                position: relative;
                left: 0;
                text-align: center;

                h2{
                    font-size: clamp(1.5rem, 2.5rem, 3.5rem);
                }
            }

           
        }
        #doces-meio{
            background-color: $cinza-claro;
            height: 450px;
            position: relative;

            .container{
                position: relative;
                left: 0;
                @include flex(row, space-evenly, center);
                height: 0px;

            }
            
            @media all and (max-width: 968px){
                height: 400px;
                
                .container{ 
                    top: -150px;
                    flex-wrap: wrap;
                    align-items: start;
                    justify-content: center;
                    gap: 20px;
                }    
            }

            @media all and (max-width: 829px){
                height: 750px;
            }

            @media all and (max-width: 559px){
                height: 1450px;
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

              @media all and (max-width: 768px){
             
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
