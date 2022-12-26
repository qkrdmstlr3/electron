import axios from 'axios';
import { OPEN_WEATHER_API_KEY } from '../keys';

export async function getWeather() {
  const city = 'seoul';
  const weather = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`
  );

  return weather.data;
}
