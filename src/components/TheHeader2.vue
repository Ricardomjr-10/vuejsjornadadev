<template>
    <header class="header">
        Header
    </header>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('resize', this.resize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.resize)
        //destruir as libs e eventos listeners
        console.log('beforeUmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    methods: {
        resize($evt) {
            console.log($evt)
        }
    }
}
</script>

<style>
 .header {
    background: #000;
    color: #fff;
 }
</style>