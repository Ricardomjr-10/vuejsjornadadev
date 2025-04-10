<template>
    <div>
        <label for="">Nome</label> <br>
        <input v-model="name" type="text"> <br>

        {{ name }}
    </div> <br>

    <div>
        <label for="">Sports</label> <br>
        <select v-model="sports">
            <option value="">Escolha</option>
            <option value="Futebol">Futebol</option>
            <option value="Skate">Skate</option>
            <option value="Tenis">Tenis</option>
        </select> <br>
        {{ sports }}
    </div> <br>

    <div>
        <label for="">Newsletter</label>
        <input v-model="newsletter" type="radio" value="sim">sim
        <input v-model="newsletter" type="radio" value="nao">nao <br>
        {{ newsletter }}
    </div> <br>

    <div>
        <input v-model="contract" type="checkbox"> aceita nosso termo... <br>
        {{ contract }}
    </div> <br>

    <div>
        <input v-model="colors" type="checkbox" value="amarelo"> Amarelo <br>
        <input v-model="colors" type="checkbox" value="azul"> Azul <br>
        {{ colors }}
    </div>

</template>


<script>
    export default {
        data() {
            return {
                name: 'Ricardo',
                sports: 'Futebol',
                newsletter: 'sim',
                contract: false,
                colors: []
            }
        }
    }
</script>

<style>
body {
    background-color: gray;
}

</style>