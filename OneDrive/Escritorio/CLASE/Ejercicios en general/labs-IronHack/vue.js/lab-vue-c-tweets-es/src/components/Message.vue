<template>
    <div class="message">
      {{ message }}
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    message: {
      type: Object,
      required: true
    }
  });
  </script>