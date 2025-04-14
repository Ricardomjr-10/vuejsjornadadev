<template>
    <div class="container">
        <h1>Aula 12 - ciclo de vida (life Cycle)</h1>
        <!-- Criação,
            preparar o componente
            ajax, inicializar algumas variaveis
            não tem acesso ao template (DOM)
          montagem, 
            inicializar um lib externa
            precisa de acesso ao template (DOM)
            tem acesso ao template
          atualizacao
            debug
            update
          desmontagem 
            remover tudo que for necessario para liberar (lib-destroy)
            memoria
            
            hooks-->
        
    </div>
</template>

<script>
export default {
    data() {
        return {
         
        }
    },
    watch: {

    },
    computed: {
        
    },
    methods: {

    },
    // HOOKS
    beforeCreate() {

    },
    created () {

    },
    beforeMount() {

    },
    mounted() {

    },
    beforeUnmount() {

    },
    unmounted() {
        
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