<script setup>


</script>

<template>
    <section id="apresentacao" class="container">
        <div>
          <h1 class="titulo">Confeitaria da <span class="destaque">Cris</span></h1>
          <p style="font-weight: bold;">Prepare-se para uma experiência deliciosa!</p>
          <p>Mergulhe no nosso menu digital e descubra um jeito prático de fazer seus pedidos</p>
        </div>
    
        <img src="../../assets/imagem-de-apresentacao.jpg" alt="bolo"/>
    </section>
</template>

<style lang="scss">
    

    #apresentacao{
        @include flex(column, space-between, center);
        gap: 2rem;
        /* padding: 2rem 1rem; */

        @media (min-width: 768px) {
            flex-direction: row;
        }

        div{ 
            h1{
                font-size: clamp(2rem, 6vw, 3.5rem);
            }

            p{
                margin-top: 25px;
            }
        }

        img {
            max-width: clamp(400px, 40vw, 500px);
            width: 100%;
            border-radius: 1rem;
        }
    }


    
   
</style>
