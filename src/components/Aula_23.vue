<template>
    <div>
        <h1>Aula - 23 introducao ao Vuex - Actions </h1>
        <p>se parece com as mutations.
            actions - retorna uma promessa - é assincrono
        </p>
        <button @click="updateUser">
            Atualizar Perfil
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        updateUser() {
            const newUser = {
            first_name: 'Breno',
            last_name: 'Muller',
            email: 'breno@breno.com'
          }
          this.$store.commit('storeUser', newUser)
        }
    }
}
</script>