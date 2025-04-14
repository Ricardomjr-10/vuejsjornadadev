<template>
    <div class="container">
        <h1>Aula 12 - ciclo de vida (life Cycle)</h1>
        <input v-model="name" type="text">
        {{ name }}
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
         name:'Ricardo'
        }
    },
    watch: {

    },
    computed: {
        
    },
    methods: {

    },
    // HOOKS
    beforeUpdate() {
        console.log('beforeUpdate', this.name)
    },
    updated(){
        console.log('update', this.name)
    }
    // beforeCreate() {
    //     console.log('beforeCreate')
    //     console.log('Estado: ', this.name)
    //     console.log('DOM:', this.$el) // $el - elemento raiz
    // },
    // created () {
    //     console.log('created')
    //     console.log('Estado: ', this.name)
    //     console.log('DOM:', this.$el)
    // },
    // beforeMount() {
    //     console.log('beforeMount')
    //     console.log('Estado: ', this.name)
    //     console.log('DOM:', this.$el)
    // },
    // mounted() {
    //     console.log('mounted')
    //     console.log('Estado: ', this.name)
    //     console.log('DOM:', this.$el)
    // },
    // beforeUnmount() {
    //     console.log('beforeUmount')
    //     console.log('Estado: ', this.name)
    //     console.log('DOM:', this.$el)
    // },
    // unmounted() {
    //     console.log('unmounted')
    //     console.log('Estado: ', this.name)
    //     console.log('DOM:', this.$el)
    // }
}
</script>

<style>
.container {
    width: 500px;
    margin: auto;
    text-align: justify;
}
</style>