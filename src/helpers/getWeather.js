// aqui tendremos la funcion para realizar la peticion a la api de openweather
import axios from "axios";
const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=1.7&longitude=10.5&current=temperature_2m&timezone=auto&forecast_days=1";

export const getTemperatura = async () => {
  const respuesta = await axios.get(API_URL);
  const nuevaTemeratura = respuesta.data.current.temperature_2m;

  return nuevaTemeratura;
};
