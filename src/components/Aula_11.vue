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
        name (vl) {
            if (vl.length >= 3) {
                this.saveNewUser()
            }
        }
    },

    computed: {

    },

    methods: {
        saveNewUser() {
            console.log('Ajax') //colocar no method para não encher
            console.log(this.name)
        }
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