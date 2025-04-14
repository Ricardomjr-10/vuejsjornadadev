<template>
    <header class="header">
        Header
    </header>
</template>

<script>
export default {
    beforeUnmount() {
        //destruir as libs e eventos listeners
        console.log('beforeUmount')
    },
    unmounted() {
        console.log('unmounted')
    }
}
</script>

<style>
 .header {
    background: #000;
    color: #fff;
 }
</style>