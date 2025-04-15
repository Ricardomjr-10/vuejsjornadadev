<template>
    <div class="container">
        <h1>Aula 13 - components <slot></slot></h1>
        <header class="header">
            <h1 v-if="$slots.title" class="title">
                <slot name="title" />
            </h1>

            <div class="descripton">
                <slot name="description"></slot>
            </div>

            <div class="content">
                <slot />
            </div>
        </header>
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$slots)
    }
    
}
</script>

<style>
.container {
    width: 500px;
    margin: auto;
    text-align: justify;
}
</style>