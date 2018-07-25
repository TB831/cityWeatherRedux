import { combineReducers } from 'redux';
import reducerWeather from './reducerWeather.js';

const rootReducer = combineReducers({
  weather: reducerWeather
});

export default rootReducer;
