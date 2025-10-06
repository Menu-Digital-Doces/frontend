<script setup>



</script>

<template>
    <div id="footer">
        <p>Confeitaria da Cris | 2025</p>
    </div>
  
</template>

<style lang="scss">
    #footer{
        width: 100%;
        height: 100px;
        background-color: $preto;
        @include flex(row, center, center);
    
        p{
            color: $cinza-escuro;
            font-weight: 100;
        }
    }


</style>