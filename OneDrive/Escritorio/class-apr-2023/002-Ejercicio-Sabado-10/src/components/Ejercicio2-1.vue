<script setup>
import { ref } from "vue";


    const language = ref("HTML");

</script>




<template>
    <div>
      <p v-if="language === 'HTML'">Today we are learning {{ language }}</p>
      <p v-else-if="language === 'CSS'">Today we are learning {{ language }}</p>
      <p v-else-if="language === 'JS'">Today we are learning {{ language }}</p>
      <p v-else>Today there's no class!</p>
    </div>
  </template>
 <style scoped>
</style> 
