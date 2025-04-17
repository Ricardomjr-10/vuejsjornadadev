<template>
  <div>
   <Aula_16 
   v-if="showAlert"
   :variant="variant"
   @close="onClose"
   />
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
      showAlert: true,
     variant: 'success'
    }
  },
  methods: {
    onClose() {
      this.showAlert = false
      console.log('on close')
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
