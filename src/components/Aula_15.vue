<template>
    <div class="container">
        <h1>Enviando dados para o componente filho (props)</h1>
        <div class="alert">
            Seu formulario foi enviado com sucesso
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    width: 500px;
    margin: 100px auto;
    background: bisque;
    padding: 10px;
    border-radius: 10px;
}

.alert {
    padding: 5px;
    border-radius: 6px;
    color: gray;
}
</style>