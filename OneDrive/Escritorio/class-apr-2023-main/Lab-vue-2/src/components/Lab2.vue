<script setup>

//Iteracion 1.
import { ref, computed } from 'vue';

const resultado = computed(() => {
      return 2 + 2;
    });

//Iteración 2.
    const nombre = ref('Emilio');
    const edad = ref(35);

    const obtenerCadena = () => {
      return `Hola, mi nombre es ${nombre.value} y tengo ${edad.value} años.`;
    };

//Iteración 3.
const mostrarElemento = ref(false);

//Iteración 4.

const publicaciones = ref([
  {
    id: 1,
    titulo: 'Publicación 1',
    descripcion: 'Descripción de la publicación 1',
    contenido: 'Contenido de la publicación 1'
  },
  {
    id: 2,
    titulo: 'Publicación 2',
    descripcion: 'Descripción de la publicación 2',
    contenido: 'Contenido de la publicación 2'
  },
  {
    id: 3,
    titulo: 'Publicación 3',
    descripcion: 'Descripción de la publicación 3',
    contenido: 'Contenido de la publicación 3'
  }
]);

//Iteración 5 Bono.

const bgColor = ref('white');

function changeColor() {
  // Generar un color aleatorio en formato hexadecimal
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  bgColor.value = randomColor;

}



</script>

<template>
  <div>
    <h1>LAB | Fundamentos de Vue.js</h1>
  <br>
    <h2>Iteración 1.</h2>
    <!-- Iteracion 1 -->
  <div>
    <p>El resultado es: {{ resultado }}</p>
  </div>

  <h2>Iteración 2.</h2>
  <!-- Iteracion 2 -->
  <div>
    <p>{{ obtenerCadena ()}}</p>
  </div>

  <h2>Iteración 3.</h2>

 <!-- Iteración 3 -->

  <div>
    <p v-if="mostrarElemento">Hola el elemento es True!!!</p>
    <p v-else>Hola!!! el elemento es falso!!! Si fuese true se mostraria otro mensaje!!!</p>
  </div>

<!-- Iteración 4 -->

<h2>Iteración 4.</h2>
<div>

<h3>Lista de Publicaciones:</h3>
  <ul>
<li v-for="publicacion in publicaciones" :key="publicacion.id">
      <h3>{{ publicacion.titulo }}</h3>
      <p>{{ publicacion.descripcion }}</p>
      <p>{{ publicacion.contenido }}</p>
</li>
</ul>
    </div>
 
    <br>
    <!-- Iteración 5 Bono -->
    <h2>Iteración 5 Bono.</h2>
    <br>
    <div>
    <button class="boton" @click="changeColor">Cambiar color</button>

    <div class="style" :style="{ backgroundColor: bgColor }">========Elemento con color de fondo======</div>
  </div>
  </div>


</template>

<style scoped>

/* Estilo del botón */
.boton{
background-color:greenyellow;
width: 100px;
height: 50px;
border-radius: 20px;
margin-bottom: 20px;
margin-left: 50px;
}


/* Estilo de la caja de Elementos de color de fondos */
.style{

width:350px;
margin-left: 10px;
border-radius: 20px;
margin-bottom: 20px;

}

</style>
