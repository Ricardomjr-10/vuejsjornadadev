<template>
    <div>
        <h1>introducao a Composition api - computed, watch</h1>
        <p>
          exemplo de computed: const fullName = computed(()=>{})
          watch(user, () => {},{deep:true})
        </p>
    </div><br>
    <button @click="updateUser">
        Alterar nome
    </button>
     <br> <br>
    <h3>User</h3>
    {{ user.first_name }} {{ user.last_name }} <br> <br>
    <h3>fullName</h3>
    {{ user.first_name }} {{ user.last_name }} <br> <br>
    <h3>User2</h3>
    {{ user2.nome }} {{ user2.sobreNome }}
</template>

<script>
import { computed, ref, watch } from 'vue';

export default {
    setup() {
        const user = ref({ // forma reativa
            first_name: 'Muller',
            last_name: 'Rocha',
        })
        const user2 = ref({
            nome:'Zuleide',
            sobreNome: 'Neves'
        })

    

        const fullName = computed(()=> {
            return `${user.value.first_name} ${user.value.last_name}`
        })

        //todo objeto
        watch(user, () => {
            console.log('logica cabulosa')
        }, {
            deep:true
        })

        //uma parte
        watch(()=> user.value.first_name, () => {
            console.log('outra logica')
        })
       

        const updateUser = () => {
            alert('Alterenado...')
            user.value.first_name = 'Ricardo'
            user2.value.sobreNome = 'Rocha'
           
        }

        return {
            user,
            user2,
            fullName,
            updateUser,
        }

}
}
</script>