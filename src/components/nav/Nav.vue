<script setup>
    import { UserCircleIcon } from '@heroicons/vue/24/solid'
    import { ShoppingCartIcon, Bars3Icon } from '@heroicons/vue/24/outline'
    import { ref, onMounted, onUnmounted, watchEffect } from 'vue'
import Avisos from '../modals/Avisos.vue';
import CarrinhoModal from '../modals/CarrinhoModal.vue';
import CentralDoUsuario from '../modals/CentralDoUsuario.vue';
    

    var menuOn = ref(true);
    var avisosOn = ref(false);
    var cartOn = ref(false);
    var userCentralOn = ref(false);

    /* menu */
    
    function toggleMenu(){
        menuOn.value = !menuOn.value;
    }
    function toggleMenuOnResizeScreen(){
        const widthScreen = window.innerWidth;
        if(widthScreen > 768){
            menuOn.value = true;
        } else{ menuOn.value = false }
    }

    onMounted(() => {
        toggleMenuOnResizeScreen();
        window.addEventListener('resize', toggleMenuOnResizeScreen)
    })
    onUnmounted(() => {
        window.removeEventListener('resize', toggleMenuOnResizeScreen);
    })



    /* avisos */

    function toggleAvisos(){
        avisosOn.value = !avisosOn.value
    }

    /* carrinho */
    function toggleCart(){
        cartOn.value = !cartOn.value
    }

    /* central do usuario */
    function toggleUserCentral(){
        userCentralOn.value = !userCentralOn.value
    }

</script>

<template>
    
    <nav>
        <a href="#"><img src="@/assets/logo.png" alt="logo confeitaria da cris"/></a>
        <ul v-show="menuOn">
            <li><a href='#'><RouterLink to="Home">Home</RouterLink></a></li>
            <li><a href='#'><RouterLink to="Catalogo">Catalogo</RouterLink></a></li>
            <li><a href='#' @click.prevent="toggleAvisos">Avisos</a></li>
            <li><a href="#" @click.prevent="toggleCart"><ShoppingCartIcon class="icone"/></a></li>
            <li><a href="#" @click.prevent="toggleUserCentral"><UserCircleIcon class="icone"/></a></li>
        </ul>
        <span id="menu-btn" @click="toggleMenu"><Bars3Icon class="icone"/></span>
    </nav>

    <Avisos v-if="avisosOn" v-bind:toggle-avisos="toggleAvisos"></Avisos>
    <CarrinhoModal v-if="cartOn" v-bind:toggle-cart="toggleCart"></CarrinhoModal>
    <CentralDoUsuario v-if="userCentralOn" v-bind:toggle-user-central="toggleUserCentral"></CentralDoUsuario>

</template>

<style lang="scss">

    #menu-btn{
        display: none;
    }
    .icone{
        color: $preto;
        width: 24px; height: 24px;
    }

    nav{
        background-color: $branco;
        height: 60px;
        padding: $padding;
        color: $preto;
        box-shadow: 0px 2px 10px -5px $preto;
        @include flex(row, space-between, center);
        width: 100%;
        position: sticky;
        top: 0;

        img{
            width: 60px;
        }

        ul{
            @include flex(row, space-between, center);

            a{
                padding: 0 12px;
                font-weight: lighter;
                font-size: .9rem;
                display: flex;
            }

            a:hover{
                background-color: $cinza-claro;
                height: 60px;
                align-items: center;
                align-self: center;
                transition: .3s;
            }

            a:visited{
                color: $preto;
            }
        }   
    }

    @media screen and (max-width: 768px) {

        #menu-btn{
            display: block;
        }

        nav{
            ul{
                background-color: $branco;
                position: absolute;
                width: calc(100% - 100px);
                height: 400px;
                left: 50px; top: 100px;
                padding: 50px;
                flex-direction: column;
                justify-content: space-between;
                border: 1px solid $preto;
                border-radius: 20px;

                a:hover{
                    background-color: $cinza-claro;
                    height: initial;
                    background-color: initial;
                    display: initial;
                    display: block;
                    transition: .3s;
                }
            }
        }
        
    }

</style>
