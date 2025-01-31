import { defineStore } from "pinia";
import { ref } from "vue";

// definimos nuestro store de pinia

export const useWeatherStore = defineStore("weather", () => {
  const temperatura = ref(0);

  const setTemperatura = (temp) => {
    temperatura.value = temp;
  };
  return { temperatura, setTemperatura };
});
