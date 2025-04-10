<template>
<h1>Aula 9</h1>
<div>
    <button v-on:click="onClick">Enviar</button>
</div>
</template>

<script>
export default {
    methods: {
        onClick() {
            console.log('click')
        }
    }

}
</script>

<style scoped>

</style>