<template>

    <div v-for="(obj, index) in todos"
    v-bind:key="obj.id"
    class="todos-item"
    >
        {{ index }} - {{ obj.title }}
    </div>

    <header class="header">
        Header
    </header>
</template>

<script>


export default {
    name: 'TheHeader',
    data() {
        return {
            todos: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "fugiat veniam minus",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 4,
                    "title": "et porro tempora",
                    "completed": true
                },
                {
                    "userId": 1,
                    "id": 5,
                    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    "completed": false
                }
            ]
        }
    }
}
</script>

<style>
.header {
    background: #000;
    color: #fff;
    margin: auto;
    width: 200px;
}

.todos-item {
    background: #000;
    margin: 0 0 5px 0;
    padding: 3px 6px;
    color: #fff;
    width: 400px;
    margin: auto;
    margin-bottom: 5px;
    text-align: justify;
}
</style>