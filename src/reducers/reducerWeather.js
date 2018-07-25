import { FETCH_WEATHER } from '../actions/index.js';

export default (state=[], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; // Returns a new instance of state
  }
  return state;
}
