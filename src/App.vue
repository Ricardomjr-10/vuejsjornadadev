<template>
  <AulaOito></AulaOito>
  <!-- <TheHeader v-show="showHeader"/>

  <div v-show="showName">
    Nome: {{ firstName }} <br>
    Sobrenome:{{ lastName}}
  </div>

  <div v-if="accessLevel === 'admin'">Usuario Admin</div>
  <div v-else-if="accessLevel === 'marketing'">Usuario Marketing</div>
  <div v-else>Usuario normal</div>

  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import AulaOito from './components/AulaOito.vue';
// import HelloWorld from './components/HelloWorld.vue'
// import TheHeader from './components/TheHeader.vue';


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // TheHeader,
    AulaOito
  },
  data () {
    return {
      showHeader:true,
      firstName: 'Jhon',
      lastName: 'Snow',
      showName: true,
      accessLevel: 'admin'
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
  margin-top: 60px;
}
</style>
