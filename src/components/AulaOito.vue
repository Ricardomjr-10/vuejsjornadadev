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
    </div>

</template>


<script>
    export default {
        data() {
            return {
                name: 'Ricardo',
                sports: 'Futebol'
            }
        }
    }
</script>

<style>
div {
    background-color: aqua;
}

</style>