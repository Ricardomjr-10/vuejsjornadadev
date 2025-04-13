<template>
  <Aula11></Aula11>
  <!-- <EventoNove></EventoNove> -->
  <!-- <AulaOito></AulaOito> -->
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
import Aula11 from './components/Aula11.vue';

//import AulaOito from './components/AulaOito.vue';
//import AulaDez from './components/AulaDez.vue';
// import EventoNove from './components/EventoNove.vue';
// import HelloWorld from './components/HelloWorld.vue'
// import TheHeader from './components/TheHeader.vue';


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // TheHeader,
    //AulaOito,
    // EventoNove,
   // AulaDez
   Aula11
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
  text-align:center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
