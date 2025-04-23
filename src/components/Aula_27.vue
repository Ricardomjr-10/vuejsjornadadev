<template>
    <div>
        <h1>Aula 27 - composition api - ciclo de vida(hooks)</h1>
        <p>
        </p>
        <button @click="onShowh2 = !onShowh2">
            Mostrar h2
        </button>
        <h2 v-if="onShowh2">Mostrado</h2>
    </div>
</template>

<script>
import { 
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted,
    ref
 } from 'vue';

export default {
    setup() {
        onBeforeMount(()=>{
            console.log('onBeforeMount')
        }),

        onMounted(()=>{
            console.log('onMounted')
        }),

        onBeforeUnmount(()=>{
            console.log('onBeforeUnmount')
        }),

        onUnmounted(()=> {
            console.log('onUnmounted')
        })

        const onShowh2 = ref(true)

        return {
            onShowh2
        }
    },
}
</script>