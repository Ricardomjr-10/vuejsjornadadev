<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/aula_17">Aula17</router-link> |
    <router-link to="/aula_18">Aula18</router-link> |
    <router-link to="/aula_19">aula_19</router-link> |
    <router-link to="/aula_20">aula_20</router-link> |
    <router-link to="/aula_21">aula_21</router-link> |
    <RouterLink to="/aula_22">aula_22</RouterLink> |
    <RouterLink to="/aula_23">aula_23</RouterLink> |
    <RouterLink to="/aula_24">aula_24</RouterLink> |
    <RouterLink to="/aula_25">aula_25</RouterLink> |
    <RouterLink to="/aula_26">aula_26</RouterLink> |
    <RouterLink to="/aula_27">aula_27</RouterLink> |
    <RouterLink to="/aula_28">aula_28</RouterLink> |
    <router-link :to="rotaDinamica">Servico</router-link> |
    <router-link to="/usuarios/10">Usuario</router-link>
    <Aula_28 @update="getUpdate" variant="danger"
    />
  </nav>
  <router-view/>
  <div>
    <!-- {{ $store.getters.total }}
    <AppProducts/>
    <br><br> -->
<!-- <pre>
  {{ $store.state.cart }}
</pre> -->
  </div>
</template>

<script>
import Aula_28 from './components/Aula_28.vue';

//import AppProducts from './components/Products/AppProducts.vue';

export default {
  name: 'App',
  components: {
    // AppProducts
    Aula_28
  },
  setup() {
    const getUpdate = (data) => {
      console.log('getUpdate', data)
    }
    return {
      getUpdate
    }
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
