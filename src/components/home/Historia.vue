<script setup>

</script>

<template>
    <div id="wrapper-historia">
        <div id="historia" class="container">
          <img src="../../assets/brigadeiro-nossa-historia.png" alt=""
          />
          <div class="divtxt">
            <h2 class="titulo">Nossa <span class="destaque">história</span></h2>
            <p>A Confeitaria da Cris é a realização de um sonho que começou na cozinha de casa. Inspirada pelo amor e carinho de suas filhas pelos doces caseiros que fazia, como o brigadeiro, o beijinho e os bolos, a Cris enxergou a oportunidade de transformar sua paixão em um negócio. Assim, nasceu a Confeitaria da Cris, com o propósito de levar a mais pessoas o sabor único e a essência do doce feito em casa, preparado com a mesma dedicação e afeto que conquistaram a família.</p>
          </div>
        </div>

    </div>
</template>

<style lang="scss">
    #wrapper-historia{
        background-color: var(--cinza-claro);
        padding-top: 650px;
        padding-bottom: 100px;

        @media screen and (max-width: 768px){
            padding-top: 250px;
        }

        @media screen and (max-width: 1024px){
            padding-top: 350px;
        }
     
    }

    #historia{
        @include flex(row, space-between, center);
        gap: 50px;



        @media (max-width: 768px){
            flex-direction: column-reverse;

            
        }

        p{
            text-align: justify;
            margin-top: 25px;
            line-height: 3;
        }

        img{
            width: 100%;
            max-width: clamp(400px, 40vw, 475px);
              @media (min-width: 1020px) {
                margin-top: 250px;
            }
        }

        div{
            max-width: 50%;

            @media (max-width: 768px){
                max-width: initial;
            }
            @media (min-width: 1020px) {
                margin-top: 250px;
            }
            
        }

        .titulo{
            font-size: 32px;
        }
        
    }
</style>
