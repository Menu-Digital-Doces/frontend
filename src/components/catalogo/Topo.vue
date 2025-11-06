<script setup>

</script>

<template>  
    <div class="topo-catalogo">
        <img src="../../assets/banner.jpg" alt="Banner Catálogo" class="banner-catalogo">     
        <div class="container conteudo-topo">
            <h2 class="titulo-pagina">Catálogo</h2>
            <p class="subtitulo-pagina">Doces artesanais feitos com carinho</p>
            <input type="text" name="busca" id="input-busca" placeholder="Buscar produtos...">
        </div>            
    </div>

</template>

<style lang="scss">
    .topo-catalogo{
        width: 100%;
        
        .banner-catalogo{
            width: 100%;
            height: 350px; /* Altura ajustada */
            object-fit: cover;
            filter: brightness(0.5); /* Escurece um pouco a imagem para o texto se destacar */
        }

        .conteudo-topo{
            width: 100%;
            height: 100%;
            @include flex(column, center, start);
            text-align: center;
            padding: 60px 20px;

            .titulo-pagina{
                color: $marrom-escuro;
                font-weight: bold;
                font-size: clamp(1rem, 6vw, 2.5rem);
                margin-bottom: 10px;
            }

            .subtitulo-pagina{
                color: $marrom-escuro;
                margin: 0 0 20px 0;
                font-size: clamp(.9rem, 2vw, 1rem);
            }

            #input-busca{
                width: 100%;
                border-radius: 15px;
                border: none;
                padding: 10px 20px;
                height: 45px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                font-size: 16px;
                margin: 30px 0;
            }
        }
    }
</style>