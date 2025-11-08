<script setup>
import Login from '@/components/modals/Login.vue';
import { ref } from 'vue';
import { isLogged } from '@/components/nav/Nav.vue';

    function changeIsLogged(){
        isLogged.value = !isLogged.value
    }
</script>

<template>
    <div id="wrapper-login-adm">
        <Login v-bind:="{changeIsLogged: () => changeIsLogged(), isAdmLogin: true}"></Login>
        
        
    </div>
</template>

<style lang="scss">

    #wrapper-login-adm{
        width: 100%;
        height: calc(100vh - 60px);
        @include flex(row, center, center);
        
        
        .fundo-modal{
            display: none;
        }
        
        #modal-login{
            position: relative;
            inset: 0;
            padding-top: 36px;
            box-shadow: 0px 4px 4px -3px var(--preto);

            .btn-close{
                display: none;
            }

            #link-cadastro{
                display: none;
            }
        }
    }

</style>