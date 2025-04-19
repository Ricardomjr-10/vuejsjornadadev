<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/aula_17">Aula17</router-link> |
    <router-link to="/aula_18">Aula18</router-link> |
    <router-link to="/aula_19">aula_19</router-link> |
    <router-link to="/aula_20">aula_20</router-link> |
    <router-link to="/aula_21">aula_21</router-link> |
    <router-link :to="rotaDinamica">Servico</router-link> |
    <router-link to="/usuarios/10">Usuario</router-link>
  </nav>
  <router-view/>
  <div>
    <AppProducts/>
  </div>
</template>

<script>
import AppProducts from './components/Products/AppProducts.vue';

export default {
  name: 'App',
  components: {
    AppProducts
  },
  data() {
    return {
      rotaDinamica: { name: 'servico'}
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
