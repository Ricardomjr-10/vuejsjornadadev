<template>
    <div class="container">
        <h1>Enviando dados para o componente filho (props)</h1>
        <div :class="baseClass">
            {{ text }}
            <slot />
            {{ test }}
        </div>
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

<style scoped>
.container {
    width: 500px;
    margin: 100px auto;
    background: bisque;
    padding: 10px;
    border-radius: 10px;
}

.alert {
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