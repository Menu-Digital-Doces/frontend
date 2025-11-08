<script setup>


</script>

<template>
    <section id="apresentacao" class="container">
        <div>
          <h1 class="titulo">Confeitaria da <span class="destaque">Cris</span></h1>
          <p style="font-weight: bold;">Prepare-se para uma experiência deliciosa!</p>
          <p>Mergulhe no nosso menu digital e descubra um jeito prático de fazer seus pedidos</p>
        </div>
        <img src="https://plus.unsplash.com/premium_photo-1666976135096-0b0019404179?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" alt="bolo"/>
    
    </section>
</template>

<style lang="scss">

// Mixin para o título (para evitar repetição)
@mixin titulo-estilo {
    font-family: 'Arial', sans-serif; // Fonte simulada
    font-weight: 300;
    color: var(--marrom-escuro);
    line-height: 1;

    .destaque {
        color: var(--rosa-escuro);
        font-weight: 700;
    }
}

#apresentacao {

    padding: 8rem 0; // Padding superior e inferior
    min-height: 80vh; // Altura mínima para a seção

    // O container deve centralizar o conteúdo e limitar a largura
    &.container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 5rem 20px;
        display: flex;
        align-items: center; // Centraliza verticalmente
        justify-content: space-between;
        gap: 40px;
    }

    // Estilos do bloco de texto
    > div:first-child {
        flex: 1;
        max-width: 50%;
        padding-right: 20px;

        .titulo {
         
            font-size: 4rem; // Tamanho grande para o título

            // Estilo para "CONFEITARIA DA"
            font-size: clamp(2rem, 4vw, 3.5rem);
            text-transform: uppercase;
   

            // Estilo para "CRIS"
            
        }

        p {
            font-family: 'Arial', sans-serif;
            color: var(--marrom-escuro);
            margin-top: 1.5rem;
            line-height: 1.6;
            max-width: 80%; // Limita a largura do texto
            font-size: 1rem;
        }

        p[style*="font-weight:bold"] {
            font-weight: 700 !important;
            margin-top: 2rem;
        }
    }

    // Estilos da imagem
    > img {
        flex: 1;
        max-width: 50%;
        height: auto;
        object-fit: cover;
        border-radius: 10px; // Borda sutil na imagem
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); // Sombra sutil
    }

    // Media Query para telas menores (ajuste para layout de coluna)
    @media (max-width: 768px) {
        &.container {
            flex-direction: column;
            padding: 4rem 20px;
        }

        div{
            @include flex(column, center, center)
        }

        > div:first-child, > img {
            max-width: 100%;
            padding-right: 0;
        }

        

        .titulo {
            text-align: center;
            .destaque {
                display: inline; // Volta para a mesma linha em mobile
            }
        }

        p {
            text-align: center;
            max-width: 100%;
        }
    }
}
    
   
</style>
