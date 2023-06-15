<template>
    <div class="user">
      <div class="name">{{ userData.name }}</div>
       <!-- <div class="handle">{{ userData.handle }}</div> -->


    </div>
  </template>

  <script setup>
  import { defineProps } from 'vue';

  defineProps({
    userData: {
      type: Object,
      required: true
    },
    timestamp: {
    type: Object,
    required: true
  },
  handle: {
    type: Object,
    required: true
  },
  });
  </script>
