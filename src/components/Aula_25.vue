<template>
    <div>
        <h1>introducao a Composition api - reatividade</h1>
        <p>
            okhar na documentacao sobre reactive e ref
        </p>
    </div>
    {{ user.first_name }}
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const user = reactive({
            first_name: 'Muller',
            last_name: 'Rocha'
        })
        return {
            user
        }

}
}
</script>