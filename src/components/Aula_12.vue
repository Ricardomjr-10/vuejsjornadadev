<template>
    <div class="container">
        <h1>Aula 12 - ciclo de vida (life Cycle)</h1>

        <input v-model="valor" type="number" placeholder="insira o valor"> <br>
        <input v-model="despesa" type="number" placeholder="adicione despesas aqui"> <br>
        <span>Restante </span>{{ 'R$' +Number(valor - despesa)}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            valor:'',
            despesa: ''
        }
    },
    watch: {

    },
    computed: {
        
    },
    methods: {

    }
}
</script>

<style>
.container {
    width: 500px;
    margin: auto;
    text-align: justify;
}
</style>