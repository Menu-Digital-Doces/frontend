<script setup>
import ListItemCliente from './ListItemCliente.vue';
</script>

<template>
        <ul id="baixo">
            <li id="legenda"><span>Nº do pedido</span><span>Total</span></li>
            <ListItemCliente v-bind:num-pedido="'0123456'"total-pedido="201"></ListItemCliente>
            <ListItemCliente v-bind:num-pedido="'0123456'"total-pedido="201"></ListItemCliente>
            <ListItemCliente v-bind:num-pedido="'0123456'"total-pedido="201"></ListItemCliente>
            <ListItemCliente v-bind:num-pedido="'0123456'"total-pedido="201"></ListItemCliente>
            <ListItemCliente v-bind:num-pedido="'0123456'"total-pedido="201"></ListItemCliente>
        </ul>
</template>

<style lang="scss">
    #pedidos-cliente{
        background-color: beige;
    
        #baixo{
            width: 100%;            
            
            li{
                width: 100%;
                @include flex(row, space-between, center);
                padding: 16px 24px;
                margin-bottom: 32px;
                background-color: $branco;
                border-radius: 10px;
                color: $marrom-escuro;
                
                span{
                    font-weight: bold;
                }
            }

            

            #legenda{
                background-color: transparent;
                margin-bottom: 0;
                margin-top: 64px;

                span{
                    font-weight: initial;

                }
            }
            
        }
    }
</style>