<template>
    <div>
        <h1>introducao a Composition api - reatividade</h1>
        <p>
            okhar na documentacao sobre reactive e ref
            para usar o ref precisa do ex: admin.value.first_name
        </p>
    </div><br>
    <button @click="updateUser">
        Alterar nome
    </button>
     <br> <br>
    <h3>User</h3>
    {{ user.first_name }} {{ user.last_name }} <br> <br>
    <h3>Admin</h3>
    {{ admin.first_name }} {{ admin.last_name }}
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        const user = reactive({ // forma reativa
            first_name: 'Muller',
            last_name: 'Rocha'
        })

        const admin = ref({
            first_name: 'Admin',
            last_name: 'master'
        })

        const updateUser = () => {
            alert('Alterenado...')
            user.first_name = 'Ricardo'
            admin.value.first_name = 'Breno'
        }

        return {
            user,
            admin,
            updateUser,
        }

}
}
</script>