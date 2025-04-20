<template>
    <div class="card">
        {{ product.name }} - {{ product.price }} <br>
        <button @click="addProduct">
            Adicionar
        </button>
        <button @click="removeProduct">
            Remover
        </button>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    methods: {
        addProduct() {
            this.$store.commit('addProduct', this.product)
        },
        removeProduct() {
            this.$store.commit('removeProduct', this.product.id)
        }
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