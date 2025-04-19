<template>
    <div class="card">
        {{ product.name }} - {{ product.price }}
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    }

}
</script>

<style>
.card {
    width: 500px;
    background: bisque;
    padding: 6px;
    margin: auto;
    margin-bottom: 5px;
}
</style>