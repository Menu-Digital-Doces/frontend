<script setup>
import { reactive, ref } from 'vue';


const { changeState } = defineProps({
    changeState: Function
})
const activeCheck = ref([])

const option1 = 'estabelecimento'
const option2 = 'casa'

function saveDeliveryMethod(){
    if(activeCheck.value.length !== 0) {
        localStorage.setItem('deliveryMethod', activeCheck.value)
        changeState()
    } else{
        console.log('nenhuma caixa marcada')
    }
}

</script>

<template>
    <div id="finalizarCompra-entrega">
        <h1>Selecione a forma de entrega</h1>
        <hr>
        <form>
            <label for="estabelecimento">
  
            <div>
                <p>Retirar no local</p>
                <p class="endereco">Avenida Paulista, 395 - Centro, São Paulo, SP - Brasil</p>
            </div>
            <input type="radio" class="check-radius" :name="'check-radiuss'" :value="option1" :id="'check-radius1'" v-model="activeCheck"/>

            </label>


                        <label for="casa">
  
            <div>
                <p>Receber no meu endereço</p>
                <p class="endereco">Avenida Paulista, 395 - Centro, São Paulo, SP - Brasil</p>
            </div>
            <input type="radio" class="check-radius" :name="'check-radiuss'" :value="option2" :id="'check-radius2'" v-model="activeCheck"/>

            </label>

        </form>
    </div>

    <a href="" class="btn" @click.prevent="saveDeliveryMethod()">Continuar</a>
</template>

<style lang="scss">

</style>
