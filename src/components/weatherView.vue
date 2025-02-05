<template>
  <h3>La temperatura actual es: {{ weatherStore.temperatura }} ℃ </h3>
</template>

<script setup>
import { useWeather } from "@/composable/useWeather";
import { onMounted } from "vue";
import { useWeatherStore } from "@/stores/weatherStore";

const weatherStore = useWeatherStore();

onMounted(() => {
  useWeather();
});
</script>

<style scoped></style>
