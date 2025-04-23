<template>
    <div>
        <h1 @click="mudarCor">Aula 28 - introducao a composition api - Props e Emit</h1>
        <p>
            <button @click="sendData">
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

    setup(props, {slots, emit}) {
        console.log(props.variant, slots)

        const sendData = () => {
            emit('update', props.variant)

        }
        const mudarCor = () => {
            const titulo = document.querySelector('h1')
            titulo.style.color='red'
        }

        return {
            sendData,
            mudarCor
        }
    }
}
</script>