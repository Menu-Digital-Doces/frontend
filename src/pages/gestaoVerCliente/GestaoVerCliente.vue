<script setup>
import Topo from '@/components/gestaoVerCliente/Topo.vue';
import Baixo from '@/components/gestaoVerCliente/Baixo.vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';

const actualRote2 = useRoute()
const orderId2 = ref(actualRote2.params.cliente)
const orderData2 = ref()
const infoStatus = ref({
    'Cliente': '',
    'Pedidos': 0,
})

onMounted(() => {
    axios.request({
        method: 'GET',
        url: `/pedidos`,
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => {
        orderData2.value = response.data.filter(pedido => {
            if(orderId2.value === pedido.user_name){
                infoStatus.value.Cliente = pedido.user_name
                infoStatus.value.Pedidos += 1
                return pedido
            }
        })
    })
    .catch(error => {
        console.log(error)
    })
})



</script>

<template>
    <div class="container" id="pedidos-cliente" v-if="orderData2 && infoStatus">
        <Topo v-bind:data="infoStatus"></Topo>
        <Baixo v-bind:data="orderData2"></Baixo>
    </div>
</template>

<style lang="scss">

</style>