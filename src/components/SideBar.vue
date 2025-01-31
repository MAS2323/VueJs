<template>
  <div class="sidebar">
    <h2>Barra laterl</h2>
    <ul>
      <li>
        <router-link to="/contador">Contador</router-link>
      </li>
      <li>
        <router-link to="/lista-tareas">Lista de Tareas</router-link>
      </li>
      <li>
        <router-link to="/registrar">Registrar</router-link>
      </li>
    </ul>
  </div>

</template>


<script setup>

</script>


<style scoped>

.sidebar{
  background-color: #f0f0f0;
  padding: 20px;
  width: 200px;

}
</style>
