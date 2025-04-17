<template>
  <div>
   <Aula_15 variant="success"/>
  </div>
  <p>paragrafo</p>
</template>

<script>
import Aula_15 from './components/Aula_15.vue';



export default {
  name: 'App',
  components: {
    Aula_15
  },
  data () {
    return {
    
    }
  }
}
</script>

<style>
p{
  background: blueviolet;
  width: 100px;
  margin: auto;
  text-align: center;
}
</style>
