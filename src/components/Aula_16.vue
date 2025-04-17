<template>
    <div class="container">
        <h1>Aula 16 - Enviando dados do pai pro filho</h1>
        <!-- <pai> - props
              <filho>
                <neto> - emit -->
    </div>
    <div :class="baseClass">
            {{ text }}
            <slot />
            <button>
                X
            </button>
        </div>
</template>

<script>
export default {
    data() {
        return {
            text:'Seu formulario foi enviado com sucesso'
        }
    },
    props: {
        variant:{
            type: String,
            default: ''
        },

        test: {
            type: String,
            default: 'test'
        }
    },
    computed: {
        baseClass() {
            return [
                'alert',
                this.variant ? `alert-${this.variant}` : ''
            ]
        }
    }
}

</script>

<style>
.container {
    width: 500px;
    margin: 100px auto;
    background: bisque;
    padding: 10px;
    border-radius: 10px;
}

.alert {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background: #ddd;
}

.alert-success {
    background: #42b983;
    color: #fff;
}

.alert-danger {
    background: red;
    color: #fff;
}
</style>