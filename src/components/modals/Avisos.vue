<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid';
import FundoModal from './FundoModal.vue';

var { changeActiveComponent } = defineProps({changeActiveComponent: Function})

</script>

<template>
    <div id="avisos">
        <FundoModal @click="changeActiveComponent()"></FundoModal>
        <div id="box">
            <img src="../../assets/avisos.png" alt="">
            <span @click="changeActiveComponent()"><XMarkIcon class="btn-close"/></span>

        </div>
    </div>
</template>

<style lang="scss">
    
    #avisos{ 
        #box{
            z-index: 11;
            width: 100%;
            min-width: 100px;
            max-width: 400px;
            height: fit-content;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            margin: auto;
            
            @media (max-width: 768px) {
                max-width: 300px;
            }
            
            img{
                width: 100%;
            }
            
            span{
                position: absolute;
                top: 47px;
                right: 20px;

                @media (max-width: 768px) {
                    top: 35px;
                }
            }

        }

    }

</style>