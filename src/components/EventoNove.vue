<template>
<h1>Aula 9</h1>
<div>
    <button v-on:click="onClick">Enviar</button> <!-- v-on ou @ - evento de click>-->
</div> <br> <br>

<div 
@mouseover="onMouseOver"
@mouseout="onMouseOut"
>
    Mouse over</div>

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
        }
    }

}
</script>

<style scoped>

</style>