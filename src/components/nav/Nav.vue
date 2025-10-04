<script setup>
    import { UserCircleIcon } from '@heroicons/vue/24/solid'
    import { ShoppingCartIcon, Bars3Icon } from '@heroicons/vue/24/outline'
    import { ref, onMounted, onUnmounted, watchEffect } from 'vue'
    
    var menuOn = ref(true);

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
</script>

<template>
    <nav>
        <a href="#"><img src="@/assets/logo.png" alt="logo confeitaria da cris"/></a>
        <ul v-show="menuOn">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Cardápio</a></li>
            <li><a href='#'>Avisos</a></li>
            <li><a href="#"><ShoppingCartIcon class="icone"/></a></li>
            <li><a href="#"><UserCircleIcon class="icone"/></a></li>
        </ul>
        <span id="menu-btn" @click="toggleMenu"><Bars3Icon class="icone"/></span>
    </nav>
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
                border: 1px solid black;
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
