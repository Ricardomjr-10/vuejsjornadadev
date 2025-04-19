<template>
    <div>
        <h1>Introdução ao Vuex - Mutations - parte 1</h1>
        
            <h2>Dados do usuario</h2>
            <p>Mutations - atualizar dados do state
                funcao storeUser(state) {}
            </p>
            <button @click="updateUser">
                Atualizar perfil
            </button>
          
            <p>{{ $store.state.user.first_name }} {{ $store.state.user.last_name }} <br>
                {{ $store.state.user.email }}
            </p>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
          
        }
    },
    methods: {
        updateUser() {
            const newUser = {
            first_name: 'Breno',
            last_name: 'Muller',
            email: 'breno@breno.com'
          }
          this.$store.commit('storeUser', newUser)
        }
    },
    created() {
    //   const newUser = {
    //     first_name: 'Breno',
    //     last_name: 'Muller',
    //     email: 'breno@breno.com'
    //   }
    //   this.$store.commit('storeUser', newUser)
      //mudar os dados do objeto user no state
    }
}
</script>