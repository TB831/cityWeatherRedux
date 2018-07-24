import config from '../../config.js';
const API_KEY = config.API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';
// Action creators always return an object
export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
