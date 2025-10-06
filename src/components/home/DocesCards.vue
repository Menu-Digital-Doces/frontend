<script setup>



</script>

<template>
  <div class="doce-card">
        <img src="../../assets/1 - bolo de banana.png" alt="" />
        <div id="gradient"></div>
        <div>
          <h3>Brigadeiro</h3>
          <p>Doce de brigadeiro</p>
        </div>
      </div>
  
</template>

<style lang="scss">

    .doce-card{
        background-color: black;
        width: 250px;
        height: 350px;
        border-radius: 20px;
        padding: 15px;
        flex-shrink: 0;
        position: absolute;
        top: -175px;
       

        @media (max-width: 768px) {
          position: initial;
        }

        img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
          
        }

        #gradient{
     
        }
    }

    .doce-card:nth-child(2){
      right: 0; left: 0;
      margin: auto;
    }

    .doce-card:nth-child(3){
      right: 0;
    }

    .doce-card:nth-child(4), .doce-card:nth-child(5){
      top: 325px;
    }

    .doce-card:nth-child(4){
      right: 50%;
    }



</style>