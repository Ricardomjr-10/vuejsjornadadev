<template>
    <div>
        <h1>Aula - 23 introducao ao Vuex - Actions </h1>
        <p>se parece com as mutations.
            actions - retorna uma promessa - é assincrono
        </p>
        <button @click="updateUser">
            Atualizar Perfil
        </button>
        <p>{{ $store.state.user.first_name }} {{ $store.state.user.last_name }} <br>
                {{ $store.state.user.email }}
            </p>
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
          //this.$store.commit('storeUser', newUser)
          this.$store.dispatch('storeUser', newUser).then(() => {
            console.log('terminou com sucesso')
          })
        }
    }
}
</script>