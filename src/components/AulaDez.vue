<template>
<div>
    <h1>Propriedade Computada</h1>
    {{ fullName }} <br>
    {{ user.first_name }} {{ user.last_name }}
</div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                first_name: 'Jon',
                last_name: 'Snow'
            }
        }
    },
    computed: {
        fullName() {
            return `${this.user.first_name} ${this.user.last_name}`
        }
    }
}
</script>

<style>

</style>