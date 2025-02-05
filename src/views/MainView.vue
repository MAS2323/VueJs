<template>
  <!-- Los componenetes padres son cmponentes que tienen a otros componentes en su interior Ejempo: MainView.vue -->
  <HeaderView :mensaje="texto"></HeaderView>
  <div class="container">
    <SideBar></SideBar>

    <!-- cunado hagomos click en uno de los elementos del siderbar se renderizara en el router-view -->
    <div class="content">
      <!-- v-model es la que nos permite poder usar variables reactivas de esta forma  -->
      <input type="text" name="" id="" v-model="texto" />
      {{ texto }}
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import HeaderView from "@/components/HeaderView.vue";
// variables reactiva
import { ref } from "vue";
const texto = ref("");
</script>

<style scoped>
.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
