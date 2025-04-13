<template>
    <div class="container">
        <h1>Aula 10 - Observadores (watch)</h1>

        <input v-model="name" type="text"> <br> <br>
        {{ name }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },

    watch: {
        name (newValue, oldValue) {
            console.log('Ajax')
            console.log(newValue, oldValue)
        }
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