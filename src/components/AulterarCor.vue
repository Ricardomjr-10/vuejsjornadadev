<template>
    <div ref="meuElemento" :style="elementoStyle">Este é um elemento com cor dinâmica</div>
    <button @click="alterarCor">Alterar Cor</button>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  
  // Cria uma referência para o elemento div
  const meuElemento = ref(null);
  
  // Cria um estado reativo para o estilo do elemento
  const elementoStyle = reactive({
    color: 'blue' // Cor inicial
  });
  
  // Função para alterar a cor
  const alterarCor = () => {
    const cores = ['red', 'green', 'purple', 'orange'];
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
    elementoStyle.color = cores[indiceAleatorio];
  
    // Você também pode acessar o elemento diretamente pela ref e alterar o style
    // if (meuElemento.value) {
    //   meuElemento.value.style.backgroundColor = 'lightgray';
    // }
  };
  </script>
  
  <style scoped>
  /* Estilos opcionais para o componente */
  div {
    padding: 10px;
    border: 1px solid #ccc;
  }
  button {
    margin-top: 10px;
  }
  </style>