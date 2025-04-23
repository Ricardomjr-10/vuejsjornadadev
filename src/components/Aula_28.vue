<template>
    <div>
        <h1>Aula 28 - introducao a composition api - Props e Emit</h1>
        <p>
            <button>
                {{ variant }}
                <slot>save</slot>
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

    setup(props) {
        console.log(props.variant)
    }
}
</script>