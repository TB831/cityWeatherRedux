import config from '../../config.js';
import axios from 'axios';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${config.API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
// Action creators always return an object
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
