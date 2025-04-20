<template>
    <div class="card">
        {{ product.name }} - {{ product.price }} <br>
        <button @click="addProduct">
            Adicionar
        </button>
        <!-- se estiver item no cart aparece o botao de remover -->
        <button 
        v-if="itemCart"
        @click="removeProduct">
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
       
    },
    computed: {
        itemCart() {
            return this.$store.state.cart.length
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