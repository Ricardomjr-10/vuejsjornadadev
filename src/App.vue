<template>
  <div>
    <Aula_17/>
  </div>
  <p>Paragrafo</p>
</template>

<script>
import Aula_17 from './components/Aula_17.vue';


export default {
  name: 'App',
  components: {
    Aula_17
  },
  data () {
    return {
  
    }
  },
  methods: {

  }
}
</script>

<style>
p{
  background: blueviolet;
  width: 100px;
  margin: auto;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  font-size: 20px;
  color: aliceblue;
}
</style>
