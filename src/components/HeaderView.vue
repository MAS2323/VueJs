<template>
  <!-- consumir Apis usando Axios en vuejs  -->
  <div class="header">{{ mensajeRecibido }}<Wheather></Wheather></div>
</template>

<script setup>
import Wheather from "./weatherView.vue";
import { defineProps, ref, watch } from "vue";
// define props esta esperando un arreglo con las propiedades
// Estas propiedades definidas en el componente hijo son las que usaremos en el componente padre para enviar parametros
const props = defineProps(["mensaje"]);
const mensajeRecibido = ref(props.mensaje);

// watch estara atento a los cambios de las props
watch(
  () => props.mensaje,
  (newValue) => {
    mensajeRecibido.value = newValue;
  }
);
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  /* position: fixed; */
  top: 0;
  right: 0;
  left: 0;
  background-color: #333;
  color: #fff;
}

h3 {
  margin: 0;
}
</style>
