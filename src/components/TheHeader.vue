<template>
    <h1 class="title">Curso Vue 3</h1>
    <!-- dinamico -->
     <h2 :class="classVar">Curso Vue 3</h2>
     <h3 :class="{'title':false, 'title-home':isHome}">Curso Vue 3</h3>

     <p :class="['text', {'title-home': isHome}]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum optio soluta veniam autem quis assumenda necessitatibus iste reiciendis aliquid nam tempore voluptatibus voluptatem sapiente magnam nulla odio, incidunt cumque accusamus.</p>

     <p :class="pClass">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum optio soluta veniam autem quis assumenda necessitatibus iste reiciendis aliquid nam tempore voluptatibus voluptatem sapiente magnam nulla odio, incidunt cumque accusamus.</p>

     <p style="background-color: black; color: aliceblue;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus, est ducimus neque in, ea atque magni voluptatibus quia beatae, ipsa nisi? Reprehenderit eum molestiae omnis eaque voluptatum sequi veritatis?</p>

     <p :style="styleClass">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nulla omnis laborum saepe eaque perspiciatis eligendi non aspernatur consequuntur, id necessitatibus quisquam veritatis voluptate quaerat. Cumque, suscipit necessitatibus. Eum, nisi?</p>


    <div v-for="(obj, index) in todos" v-bind:key="obj.id" class="todos-item">
        {{ index }} - {{ obj.title }}
        <img 
        v-if="obj.imgSrc"
        v-bind:src="obj.imgSrc">
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
            styleClass: {'backgroundColor': 'blue'},
            isHome: true,
            pClass: ['text', 'title-home'],
            classVar: 'title',
            // imgSrc: "https://via.placeholder.com/150",
            // imgAlt: "foto de Jhon Snow",
            todos: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false,
                    "imgSrc": "https://via.placeholder.com/150",
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",
                    "completed": false,
                    "imgSrc": "https://via.placeholder.com/150",
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
.text {
    color: red;
}
.title-home{
    font-size: 40px;
    color: green;
}
.title {
    font-size: 20px;
    color: blue;
}
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