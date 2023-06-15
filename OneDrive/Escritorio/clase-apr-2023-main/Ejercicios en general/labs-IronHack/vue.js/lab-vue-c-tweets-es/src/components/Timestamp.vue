<template>
  <div class="timestamp">
    {{ timestamp }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  timestamp: {
    type: String,
    required: true
  }
});
</script>
