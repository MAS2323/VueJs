import { useWeatherStore } from "@/stores/weatherStore";
import { getTemperatura } from "@/helpers/getWeather";

// lo que hacemos en esta funcion es guardar lo que nos dio la peticion en el store de pinia. Para esto, primero importamos el store de pinia y la funcion que nos da la temperatura. Luego, creamos una funcion asincrona que nos da la temperatura y la guardamos en el store de pinia. Finalmente, exportamos la funcion para poder usarla en otros archivos.

export const useWeather = async () => {
  const temperatura = await getTemperatura();
  const weatherStore = useWeatherStore();

  weatherStore.temperatura = temperatura;
};
