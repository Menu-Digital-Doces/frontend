<script setup>

</script>

<template>  
    <div class="topo">
        <img src="../../assets/banner.jpg" alt="" id="catalogo-banner">     
        <div class="container">
            <h2 class="titulo">Catálogo</h2>
            <p>Doces artesanais feitos com carinho</p>
            <input type="text" name="" id="">
        </div>            
    </div>

</template>

<style lang="scss">
    .topo{
        #catalogo-banner{
            width: 100%;
            height: 300px;
            object-fit: cover;
        }

        .container{
            padding: 32px 16px;

            h2{
                color: $marrom-escuro;
                font-weight: bold;
                font-size: 32px;
            }

            p{
                margin: 16px 0 42px 0;
            }

            input{
                width: 100%;
                border-radius: 30px;
                border: none;
                padding-left: 16px;
                height: 35px;
            }
        }
    }
</style>