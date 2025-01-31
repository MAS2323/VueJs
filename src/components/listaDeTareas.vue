<template>
    <div>
        <h2>Lista de Tareas</h2>

        <!-- v-model nos permite vincular de forma bidirecional un elemento de formulario con un estado de vue -->
        <!-- @keyup es un modificador de evento que nos permite escuchar el evento keyup en función de la tecla que presionamos -->

        <input type="text" name="" id="" v-model="nuevaTarea" @keyup.enter="addTatear"/>
        <ul>
          <li v-for="(tarea, index) in tareas" :key="index">
            {{ tarea }}
            <button @click="deleteTarea(index)">Eliminar</button>
          </li>
        </ul>
    </div>
</template>

<script setup>
  import { ref } from 'vue';

  const tareas = ref([]);
  const nuevaTarea = ref('');

  const addTatear = () => {
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value = '';
  }

  const deleteTarea = (index) =>{
    // usamos el splice para eliminar un elemento de un array
    tareas.value.splice(index, 1);
  }

</script>

<style>
</style>
