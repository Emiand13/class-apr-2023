  
  <script setup>
  import { defineProps } from 'vue';
  import ProfileImage from './ProfileImage.vue';
  import User from './User.vue';
  import Timestamp from './Timestamp.vue';
  import Message from './Message.vue';
  import Actions from './Actions.vue';
 

  
  defineProps({
    tweet: {
      type: Object,
      required: true,
      
    }
  });
  </script>


<template>
  <div class="tweet">
    <ProfileImage :image="tweet.user.image" />
    <div class="body">
      <div class="top">
        <User :userData="tweet.user" />       
        <Timestamp :timestamp="tweet.timestamp" />
      </div>
      <div class="content">
        <Message :message="tweet.message" />
        <Actions />
      </div> 
    </div>
  </div>
</template>

  

  

  <style scoped>
  a {
    color: #42b983;
  }
  </style>