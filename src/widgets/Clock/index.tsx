import { useLayoutEffect, useState } from 'react';
import { match } from 'ts-pattern';
import { getWeather } from '../../api/weather';
import { addStartPaddingToTime } from '../../utils/addStartPaddingToTime';
import * as Style from './style.css';
import { useWeather } from './useWeather';

export function Clock() {
  const [date, setDate] = useState({ hour: 0, minute: 0 });
  const weather = useWeather();

  const setCurrentTime = () => {
    const date = new Date();
    setDate({ hour: date.getHours(), minute: date.getMinutes() });
  };

  useLayoutEffect(() => {
    setCurrentTime();
    const interval = setInterval(setCurrentTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const weatherIcon = match(weather)
    .with('Thunderstorm', () => '☀️')
    .with('Drizzle', () => '🌧')
    .with('Rain', () => '🌧')
    .with('Snow', () => '❄️')
    .with('Atmosphere', () => '🌫')
    .with('Clear', () => '☀️')
    .with('Clouds', () => '☁️')
    .otherwise(() => '');

  return (
    <div className={Style.clockWrapperStyle}>
      <div className={Style.leftStyle}>{weatherIcon}</div>
      <div className={Style.rightStyle}>
        {addStartPaddingToTime(date.hour)} : {addStartPaddingToTime(date.minute)}
      </div>
    </div>
  );
}
