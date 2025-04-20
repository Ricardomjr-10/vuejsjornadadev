<template>
    <div>
        <h1>Aula - 22 - introducao ao vuex - Getters</h1>
        <p>getters - funciona igual o computed
            exemplo: dependencia - valor total
            total(state) {
                return state.cart.reduce((total, item) => total += item.price, 0)
            }
        </p>
    </div>
</template>