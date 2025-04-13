<template>
    <div class="container">
        <h1>Aula 10 - Observadores (watch)</h1>

        <input v-model="name" type="text"> <br> <br>
        {{ name }} <br> <br> <br>

        <input v-model="user.first_name" type="text">
        <input v-model="user.last_name" type="text"> <br> <br>
        {{ user.first_name }} {{ user.last_name }} <br> <br>

        <select v-model="page" name="" id="">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
        {{ page }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            page:5,
            user: {
                first_name:'',
                last_name:''
            }
        }
    },

    watch: {
        name (vl) {
            if (vl.length >= 3) {
                this.saveNewUser()
            }
        },
        page() {
            this.changePage()
        },
        user: {
            handler() {
                console.log('user alterado')
            },
            deep: true
        }
    },

    computed: {

    },

    methods: {
        saveNewUser() {
            console.log('Ajax') //colocar no method para não encher
            console.log(this.name)
        },
        changePage() {
            console.log('Ajax changePage')
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