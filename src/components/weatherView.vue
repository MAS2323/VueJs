<template>
{{ weatherStore.temperatura}}
</template>


<script setup>
import { useWeather } from '@/composable/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';


const weatherStore = useWeatherStore();


onMounted(() =>{
    useWeather();
})
</script>


<style scoped>

</style>
