<template>
    <div>
        <h1>introducao a Composition api - reatividade</h1>
        <p>
            okhar na documentacao sobre reactive e ref
        </p>
    </div><br>
    <button @click="updateUser">
        Alterar nome
    </button> <br>

    {{ user.first_name }} {{ user.last_name }}
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const user = reactive({
            first_name: 'Muller',
            last_name: 'Rocha'
        })

        const updateUser = () => {
            alert('Alterenado...')
            user.first_name = 'Ricardp'
        }

        return {
            user,
            updateUser
        }

}
}
</script>