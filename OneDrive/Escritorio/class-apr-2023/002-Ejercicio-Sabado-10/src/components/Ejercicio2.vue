<script setup>
import { reactive } from "vue";

const reactiveData = reactive(true);

//============================================

</script>


<template>
    <div>
   <h1 v-if="reactiveData">I'm showing up because our reactive data is true!</h1>
    <h1 v-else>I'm the option anytime our reactive data cannot be read as true</h1>
  </div>
<!-- =================================================== -->


</template>

<style scoped>

</style>


<!-- Creamos cuatro <p> tags. Los cuatro se renderizarán condicionalmente mirando a una misma variable que llamaremos "language". Esta variable podrá tener tres valores distintos: "HTML", "CSS" o "JS". En nuestro template deberemos leer dicha variable y enseñar un <p> u otro según su valor. Cada uno de los <p> tags a su vez contendrá el texto "Today we are learing" seguido del valor de la variable que imprimiréis en pantalla usando la moustache syntax. El último <p> tag se encargará de aparecer cuando el valor de "language" no sea ninguno de los tres mencionado anteriormente, y contendrá el texto "Today there's no class!". -->