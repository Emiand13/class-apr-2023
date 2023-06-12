<script setup>
import Lab2 from './components/Lab2.vue'

</script>

<template>
  <div>
    <ol>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <p>{{ post.content }}</p>
      </li>
    </ol>
  </div>

  <main>
    <Lab2/>
  </main>
</template>

<style scoped>

</style>
