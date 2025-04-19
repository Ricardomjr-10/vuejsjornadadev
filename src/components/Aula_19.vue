<template>
    <div>
        <h1>Introdução ao Vuex (state)</h1>
        <p>
            Quando usar o state - pegar dados do usuario.
            Vuex - banco de dados do front end.
            instalação - vue add vuex.
            invez de colocar os dados no return do data, colocar
            no state do vuex no store, index.
            e fica acessivel de qualquer lugar.
        </p>
        
            <h2>Dados do usuario</h2>
            <p>{{ $store.state.user }}</p>
            <p>{{ $store.state.user.first_name }} {{ $store.state.user.last_name }} <br>
                {{ $store.state.user.email }}
            </p>
        
        <p>
            {{ $store }}
        </p>
    </div>
</template>

<script>

export default {
    data() {
        return {
          
        }
    },
    created() {
        console.log(this.$store)
        console.log(this.$store.state.user)
    }
}
</script>