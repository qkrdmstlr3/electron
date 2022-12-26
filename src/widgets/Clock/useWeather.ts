import { useLayoutEffect, useState } from 'react';
import { getWeather } from '../../api/weather';

type WeatherType = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Atmosphere' | 'Clear' | 'Clouds';

export function useWeather() {
  const [weather, setWeather] = useState<WeatherType>();

  const updateWeather = async () => {
    const { weather } = await getWeather();
    setWeather(weather[0].main as WeatherType);
  };

  useLayoutEffect(() => {
    updateWeather();
  }, []);

  return weather;
}
