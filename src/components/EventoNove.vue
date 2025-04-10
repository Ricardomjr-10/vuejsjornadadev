<template>
<h1>Aula 9</h1>
<div>
    <button v-on:click.once="onClick">Enviar</button> <!-- v-on ou @ - evento de click> o once signifaca so vai clicar uma vez-->
</div> <br> <br>

<div 
@mouseover="onMouseOver"
@mouseout="onMouseOut"
>
    Mouse over</div> <br> <br>

    <div>
        <form @submit.prevent="onSubmit" action="https://www.google.com"> <!--Buscar eventos modificadores na documentacao do veujs-->
            <input @keyup.enter="onKeyUp" type="text">
            <button type="submit">Submit</button>
        </form>
    </div>

</template>

<script>
export default {
    methods: {
        onClick($evt) {
            console.log('click', $evt)
        },
        onMouseOver($evt) {
            console.log('mouse over', $evt)
        },
        onMouseOut($evt) {
            console.log('mouse out', $evt)
        },
        onSubmit(evento) {
            console.log('submit', evento)
        },
        onKeyUp(evento) {
            console.log('keyup', evento)
        }
    }

}
</script>

<style scoped>

</style>