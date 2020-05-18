import { LOAD_ALL_FLIGHTS_ASYNC } from '../actions/types';

const initialState = {
  all: [],
  filtered: []
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_FLIGHTS_ASYNC:
      return {
        all: action.flights,
        filtered: []
      };

    default:
      return state;
  }
};

export default flightsReducer;
