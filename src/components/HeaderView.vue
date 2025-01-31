<template>
  <!-- consumir Apis usando Axios en vuejs  -->

   <div class="header">
      <h3>La temperatura actual es: <Wheather></Wheather> </h3>
   </div>
</template>


<script setup>

import Wheather from './weatherView.vue';


</script>

<style scoped>
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #333;
    color: #fff;
  }

  h3{
    margin: 0;

  }
</style>
