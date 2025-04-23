<template>
    <div>
        <h1>Aula 28 - introducao a composition api - Props e Emit</h1>
        <p>
            <button @click="$emit('update', true)">
                {{ variant }}
                <slot>save</slot>
                <slot name="icon"></slot>
            </button>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'Success'
        }
    },

    setup(props, {slots}) {
        console.log(props.variant, slots)
    }
}
</script>