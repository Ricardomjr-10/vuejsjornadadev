<template>
    <div>
        <h1>Introdução ao Vuex - Mutations - parte 1</h1>
        
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
      
    }
}
</script>