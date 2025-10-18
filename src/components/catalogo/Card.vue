<script setup>

</script>

<template>
    <div class="card">
        <img src="../../assets/1 - bolo de banana.png" alt="">
        <div class="card-texts">
            <h6>Doce <span>Preço</span></h6>
            <p class="descricao">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p class="estoque">estoque</p>
            <div class="baixo">
                <div class="controles-pedido">
                    <a href="#" class="btn-option">-</a><span>0</span><a href="#" class="btn-option">+</a>
                </div>
                <a href="#" class="btn">Adicionar</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .card{
        width: 350px;
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 0px 4px 4px -3px $preto;

        img{
            width: 100%;
            height: 350px;
            object-fit: cover;
         
        }

        .card-texts{
            padding: 24px;
            height: 300px;
            
            h6{
                @include flex(row, space-between, center);
                text-transform: uppercase;
                font-size: 18px;
                font-weight: bold;
                color: $marrom-escuro;

                span{
                    font-weight: bold;
                }
            }
        
            p{
                margin: 16px 0;
                font-size: 14px;
                color: $cinza-escuro;
            }

            .descricao{
                max-height: 100px;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            .estoque{

            }

            .baixo{
                @include flex(row, space-between, center);

                .controles-pedido{
                    width: 90px;
                    @include flex(row, space-between, center);

                    .btn-option{
                        border: 2px solid $cinza-escuro;
                        padding: 2px 8px;
                        border-radius: 40px;
                        font-weight: bold;
                        color: $preto;
                    }

                    span{
                        font-size: 16px;
                        color: $preto;
                    }

            }

                .btn{
                    color: $rosa-escuro;
                    border: solid 2px $rosa-escuro;
                }

            }
        }
    }
</style>