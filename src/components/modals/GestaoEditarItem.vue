<script setup>
import axios from 'axios';
import FundoModal from './FundoModal.vue';
import { ref, watch } from 'vue';
import Alerta from './Alerta.vue';

const alertState = ref(false);
const alertText = ref('')

const props = defineProps({data: {type: Object, default: () => ({}) }, toggleEdit: Function, resetData: Function, mode: String});

const product = ref(JSON.parse(JSON.stringify(props.data)));
// const product = ref(props.data);
watch(() => props.data, (newValue) => { product.value = JSON.parse(JSON.stringify(newValue)); }, { immediate: true });
// watch(() => props.data, (newValue) => { product.value = newValue; }, { immediate: true });

// 

const imgInput = ref(false)
const message = ref(false)

function changeImgInput(){
    if(message.value === true){
        message.value = false
        imgInput.value = !imgInput.value
    } else{
        imgInput.value = !imgInput.value
    }
}
function changeMessage(){
    message.value = true
    product.value.imagem = ''
    console.log(product)
}

function editarProduto(){
    if(props.mode === 'Criar'){
        console.log(product.value)
        axios.request({
            method: 'POST',
            url: `/produtos`,
            data: {
                'nome': product.value.nome,
                'descricao': product.value.descricao,
                'preco': product.value.preco,
                'quantidade': product.value.quantidade,
                'imagem': product.value.imagem,
                'status': product.value.status,
            },
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            props.resetData()
            props.toggleEdit()
            
        })
        .catch(error => {
            alertText.value = error.response.data.message
            toggleAlert()
        })
    } else if(props.mode === 'Editar'){
        console.log(product.value)
        axios.request({
            method: 'PUT',
            url: `/produtos/${product.value.id}`,
            data: {
                'nome': product.value.nome,
                'preco': product.value.preco,
                'status': product.value.status,
                'quantidade': product.value.quantidade,
                'imagem': product.value.imagem,
                'descricao': product.value.descricao
            },
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            props.resetData()
            props.toggleEdit()

        })
        .catch(error => {
            alertText.value = error.response.data.message
            toggleAlert()
        })
    }
}

function toggleAlert(){
    alertState.value = !alertState.value
}


</script>

<template>
    <FundoModal @click.prevent="props.toggleEdit()"></FundoModal>
    <div class="box-modal" id="modal-gestao-editar-item">
        <a href="" class="btn-close" @click.prevent="props.toggleEdit()">X</a>
        <div class="topo">
            <h2>Editar item</h2>
            <hr>
        </div>
        <form>
            <div>
                <label for="nome-produto">Nome</label>
                <input type="text" id="nome-produto" v-model="product.nome">

            </div>

            <div>
                <label for="descricao-produto">Descrição</label>
                <textarea name="" id="descricao-produto" v-model="product.descricao"></textarea>

            </div>

            <div>
                <label for="">Valor</label>
                <input type="number" id="valor-produto" v-model="product.preco">

            </div>

            <div>
                <label>Imagem</label>
                <img :src="product.imagem" alt="">
                <div class="controles-imagem">
                    <a href="" id="upload" @click.prevent="changeImgInput()">Fazer upload</a><a href="" @click.prevent="changeMessage()" id="deletar">Deletar imagem</a>
                    <span v-if="message">* Imagem removida.</span>
                </div>
                <label v-if="imgInput" for="imgInput">Digite o caminho da imagem</label>
                <input v-if="imgInput" type="text" name="imgInput" v-model="product.imagem">
            </div>

            <div class="form-baixo">
                <div>
                    <label for="unidade-produto">Unidade</label>
                    <select name="" id="unidade-produto">
                        <option value="a">UN</option>
                    </select>
                </div>
                <div>
                    <label for="quantidade-produto">Quantidade</label>
                    <input type="number" name="" id="quantidade-produto" v-model="product.quantidade">
                </div>
            </div>

            <div class="botoes-form">
                <a href="#" class="btn-btn" id="cancelar" @click.prevent="props.toggleEdit()">Cancelar</a>
                <a href="#" class="btn-btn" id="confirmar" @click.prevent="editarProduto()">Confirmar</a>

            </div>
        </form>
    </div>
    <Alerta v-if="alertState" v-bind:="{text: alertText, toggleAlert: () => toggleAlert()}"></Alerta>
</template>

<style lang="scss">
    #modal-gestao-editar-item{
        z-index: 11;
        inset: 0;
        margin: 0 auto;
        top: 120px;
        max-height: calc(80vh);
        overflow: auto;
        width: 750px;

        background-color: $branco;
        @include flex(column, start, start);
        padding: 24px 32px;

        @media (max-width: 768px){
            width: 90%;
        }

        .btn-close{
            position: absolute;
            right: 24px;
        }

        .topo{
            width: 100%;
            margin-bottom: 16px;

            h2{
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 16px;
            }
        }

        form{
            width: 100%;

            div{
                width: 100%;
                @include flex(column, center, start);

                label{
                    margin: 8px 0;
                }

                input{
                    width: 100%;
                    height: 35px;
                    margin-bottom: 16px;
                    border-radius: 10px;
                    padding-left: 16px;
                    border: 1px solid gray;
                    font-weight: 200;
                }

                textarea{
                    width: 100%;
                    height: 75px;
                    resize: none;
                    margin-bottom: 16px;
                    border-radius: 10px;
                    padding: 8px 0 0 16px;
                    border: 1px solid gray;
                    font-weight: 200;



                }

                img{
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    margin-bottom: 16px;
                    border-radius: 5px;
                    object-position: bottom;
                }

                .controles-imagem{
                    @include flex(row, start, center);
                    gap: 16px;

                    #upload{
                        color: $azul;
                    }

                    #deletar{
                        color: $rosa-escuro;
                    }
                }

                input[type="number"]{
                    width: 125px;
                }

                select, option{
                    font-weight: 200;

                }

                

                
            }
            
            .form-baixo{
                margin-top: 16px;
                @include flex(row, start, start);
                width: 300px;
            
                select{
                    width: 125px;
                    height: 35px;
                    border-radius: 10px;
                }
            }

            .botoes-form{
                flex-direction: row;
                gap: 32px;
                margin-top: 32px;

                #cancelar{
                   
                }

                #confirmar{
                    border: 2px solid $preto;
                    color: $preto;

                    &:hover{
                        background-color: $preto;
                        color: $branco;
                    }
                }
                 
                
            }
        }
    }
</style>