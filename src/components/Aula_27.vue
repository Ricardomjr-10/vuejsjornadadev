<template>
    <div>
        <h1>Aula 27 - composition api - ciclo de vida(hooks)</h1>
        <p>

        </p>
    </div>
</template>

<script>
import { 
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted
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
    },
}
</script>