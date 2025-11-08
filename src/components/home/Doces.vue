<script setup>
    import { reactive } from 'vue';
import DocesCards from './DocesCards.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

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
            <DocesCards v-bind:="{img: '/src/assets/6 - brigadeiro.png', titulo: 'Brigadeiro', descricao: 'Nosso clássico favorito, feito com o mais puro cacau e um toque especial de carinho. A massa é cremosa e o sabor é inesquecível, derretendo na boca a cada mordida! '}"></DocesCards>
            <DocesCards v-bind:="{img: '/src/assets/7 - beijinho.png', titulo: 'Beijinho', descricao: 'Nosso Beijinho é preparado com flocos de coco frescos e leite condensado, finalizado com coco ralado para uma textura delicada e um sabor irresistível. '}"></DocesCards>
            <DocesCards v-bind:="{img: '/src/assets/2 - bolo de maça.png', titulo: 'Bolo de maçã', descricao: 'Preparado com maçãs frescas e um toque sutil de especiarias, é uma opção leve e surpreendente. '}"></DocesCards>
            <DocesCards v-if="windowWidth<=968" v-bind:="{img: '/src/assets/4 - bolo de canoura com chocolate.png', titulo: 'Bolo de Cenoura c/ Cobertura de Chocolate ', descricao: 'A combinação que todos amam. O bolo de cenoura, macio e úmido, encontra uma generosa e irresistível cobertura de brigadeiro. '}"></DocesCards>
            <DocesCards v-if="windowWidth<=968" v-bind:="{img: '/src/assets/3 - bolo de chocolate.png', titulo: 'Bolo de Chocolate', descricao: 'Nosso bolo de chocolate é feito com cacau 100%, garantindo um sabor profundo e uma massa extra macia. Ideal para os verdadeiros amantes de chocolate. '}"></DocesCards>
            
        </div>
    </div>
    <div id="doces-meio-baixo">
        <div class="container">
            <DocesCards v-if="windowWidth>968" v-bind:="{img: '/src/assets/4 - bolo de canoura com chocolate.png', titulo: 'Bolo de Cenoura c/ Cobertura de Chocolate ', descricao: 'A combinação que todos amam. O bolo de cenoura, macio e úmido, encontra uma generosa e irresistível cobertura de brigadeiro. '}"></DocesCards>
            <DocesCards v-if="windowWidth>968" v-bind:="{img: '/src/assets/3 - bolo de chocolate.png', titulo: 'Bolo de Chocolate', descricao: 'Nosso bolo de chocolate é feito com cacau 100%, garantindo um sabor profundo e uma massa extra macia. Ideal para os verdadeiros amantes de chocolate. '}"></DocesCards>


            
        </div>
    </div>
    <div id="doces-baixo">
      
        <RouterLink class="btn-btn" href="#" :to="{name: 'catalogo'}">Ver todos</RouterLink>
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

        #cenoura{

        }

        #doces-meio{
            background-color: var(--cinza-claro);
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
            background-color: var(--rosa-medio);
            padding-top: 300px;
            @include flex(row, center, center);
            z-index: 2;


            a{
                margin-bottom: 20px;
                color: var(--preto);
                border-color: var(--preto);

                &:hover{
                    border-color: transparent;
                    color: var(--branco);
                }
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
