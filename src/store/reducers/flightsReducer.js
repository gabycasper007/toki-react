import { LOAD_ALL_FLIGHTS_ASYNC } from '../actions/types';

const initialState = {
  flights: []
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_FLIGHTS_ASYNC:
      return {
        flights: action.flights
      };

    default:
      return state;
  }
};

export default flightsReducer;
