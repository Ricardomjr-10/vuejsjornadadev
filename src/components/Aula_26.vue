<template>
    <div>
        <h1>introducao a Composition api - computed, watch</h1>
        <p>
          
        </p>
    </div><br>
    <button @click="updateUser">
        Alterar nome
    </button>
     <br> <br>
    <h3>User</h3>
    {{ user.first_name }} {{ user.last_name }} <br> <br>
    <h3>fullName</h3>
    {{ user.first_name }} {{ user.last_name }}
</template>

<script>
import { computed, ref } from 'vue';

export default {
    setup() {
        const user = ref({ // forma reativa
            first_name: 'Muller',
            last_name: 'Rocha'
        })

        const fullName = computed(()=> {
            return `${user.value.first_name} ${user.value.last_name}`
        })
       

        const updateUser = () => {
            alert('Alterenado...')
            user.value.first_name = 'Ricardo'
           
        }

        return {
            user,
            fullName,
            updateUser,
        }

}
}
</script>