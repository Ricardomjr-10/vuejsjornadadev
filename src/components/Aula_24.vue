<template>
    <div>
        <h1>Aula - 24 - introducao a composition API setup</h1>
        <p>
            agente tava usando option api, agora usar composition api.
            com option api utiliza se o mixin - uma script para com logica para ser usado em qualquer lugar. mas ao criar muitos fica dificil saber oque cada um faz.
        </p>
        {{ name }}
    </div>
</template>

<script>
//option APi
export default {
    data() {
        return {
            name: 'Ricardo'
        }
    }
}
</script>