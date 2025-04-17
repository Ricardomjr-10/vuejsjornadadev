<template>
  <div>
   <Aula_16 :variant="variant"/>
  </div>
  <p>paragrafo</p>
</template>

<script>
import Aula_16 from './components/Aula_16.vue';


export default {
  name: 'App',
  components: {
    Aula_16
  },
  data () {
    return {
     variant: 'success'
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
