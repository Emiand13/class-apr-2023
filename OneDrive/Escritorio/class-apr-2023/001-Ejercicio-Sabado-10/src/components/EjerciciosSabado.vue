<!-- Ejercicio 1 Sabado dia 10/6 -->

<!-- Aqui pondremos nuestra logica en JavaScript -->
<script setup>
 import { reactive } from 'vue';

    const persona = reactive({
      nombre: 'Diego Z',
      edad: 32,
      añoNacimiento: 1991,
      ciudadActual: 'Barcelona',
      paisActual: 'España',
      ciudadNatal: 'Valencia',
      paisNatal: 'Venezuela',
      bandaPreferida: 'Red Hot Chilli Peppers',
      ultimoConcierto: 'Kendrick Lamar i'
    });
</script>

<!-- Aqui pondremos nuestro Html -->
<template>
<div>
    <img class="dcz1" src="../assets/35953639.png">
     <p>Hola mi nombre es <span>{{ persona.nombre }}</span>
   , y tengo <span>{{ persona.edad }}</span> años.
    </p>
    <p>Actualmente vivo en <span>{{ persona.ciudadActual }}</span>,
    <span>{{ persona.paisActual }}</span>.
    <br>
    Soy nativo de <span>{{ persona.ciudadNatal }}</span>, <span>{{ persona.paisNatal }}</span> y naci el 16 de Mayo de <span>{{ persona.añoNacimiento }}</span>.
    <br>
    Mi banda preferida son los <span>{{ persona.bandaPreferida }}</span>,
    <br>
     pero mi ultimo concierto fue <span>{{ persona.ultimoConcierto }}</span>.
    </p> 
     </div>
</template>



<!-- Aqui ponemos los estilos de este archivo por eso el atributo scoped -->
<style scoped>
.dcz1{
    width: 150px;
    border-radius: 15px;
}
</style>