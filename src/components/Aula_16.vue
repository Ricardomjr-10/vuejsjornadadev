<template>
    <div class="container">
        <h1>Aula 16 - Enviando dados do pai pro filho</h1>
        <!-- <pai> - props
              <filho>
                <neto> - emit -->
    </div>
    <div :class="baseClass">
            {{ text }}
            <slot />
            <button @click="onClick">
                X
            </button>
        </div>
</template>

<script>
export default {
    data() {
        return {
            text:'Seu formulario foi enviado com sucesso'
        }
    },
    props: {
        variant:{
            type: String,
            default: ''
        },

        test: {
            type: String,
            default: 'test'
        }
    },
    computed: {
        baseClass() {
            return [
                'alert',
                this.variant ? `alert-${this.variant}` : ''
            ]
        }
    },
    methods: {
        onClick() {
            this.$emit('close')
            console.log('clicou')
        }
    }
}

</script>

<style>
.container {
    width: 500px;
    margin: 100px auto;
    background: bisque;
    padding: 10px;
    border-radius: 10px;
}

.alert {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background: #ddd;
}

.alert-success {
    background: #42b983;
    color: #fff;
}

.alert-danger {
    background: red;
    color: #fff;
}
</style>


<!-- 
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


-->