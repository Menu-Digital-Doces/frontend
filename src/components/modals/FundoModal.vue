<script setup></script>

<template>
  <div class="fundo-modal"></div>
</template>

<style lang="scss">
    .fundo-modal{
        width: 100%;
        /* height: 100vh; */
        height: calc(100vh - 60px);
        background-color: rgba(0, 0, 0, 0.5);  
        backdrop-filter: blur(7px);
        position: fixed;
        top: 60px;  
        z-index: 10;
        left: 0;
    }
</style>
