<script setup>
import Card from './components/Card.vue'
let title = 'Este es el titulo'
</script>
<template>
  <Card >
    <template #header>
      <h1>{{title}}</h1>
    </template>
    <template #default>
      <p>Este el contenido</p>
    </template>
  </Card>

</template>

<style>
:root {
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>