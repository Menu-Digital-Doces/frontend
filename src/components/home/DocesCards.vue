<script setup>



</script>

<template>
  <div class="doce-card" id="doce-card-baixo">
        <img src="../../assets/1 - bolo de banana.png" alt="" />
        <div id="gradient"></div>
        <div>
          <h3>Brigadeiro</h3>
          <p>Doce de brigadeiro</p>
        </div>
      </div>
  
</template>

<style lang="scss">

    // Variáveis de cores (simuladas)
$cor-texto-card: #fff;
$cor-destaque-card: #e91e63; // Simulação do rosa/vermelho de destaque

.doce-card {
    position: absolute;
    width: 250px; // Largura ajustada para o card
    height: 350px; // Altura ajustada para o card
    border-radius: 30px; // Bordas bem arredondadas, como na imagem
    overflow: hidden;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); // Sombra sutil */
    background-color: #fff; // Fundo branco para o card
    border: 15px solid $cinza-claro;
   

    // Estilos da imagem
    > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    // Gradiente de sobreposição
    #gradient {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%; // O gradiente cobre toda a altura
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0) 70%);
        z-index: 2;
    }

    // Bloco de texto (título e descrição)
    > div:last-child {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 3;
        padding: 20px;
        color: $cor-texto-card;
        text-align: left; // Texto alinhado à esquerda

        h3 {
            font-size: 1.2rem;
            margin: 0;
            font-weight: bold;
            text-transform: uppercase;
            line-height: 1.2;
            color: beige;
        }

        p {
            font-size: .8rem;
            margin: 5px 0 0 0;
            font-weight: bold;
            color: $rosa-claro; // Cor de destaque para a descrição
          }
        }

        &:nth-child(1), &:nth-child(2), &:nth-child(3){
          top: -150px;
        }

        &:nth-child(2){
          right: 0; left: 0;
          margin: auto;
        }
        
        &:nth-child(3){
          right: 0;
        }
      }
      

      #doces-meio-baixo #doce-card-baixo{/* os dois de baixo */
        position: relative;
        margin: unset;
        top: 0;
      }

</style>