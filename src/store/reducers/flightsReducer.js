import { LOAD_ALL_FLIGHTS_ASYNC, FILTERED_FLIGHTS } from '../actions/types';

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

    case FILTERED_FLIGHTS:
      const allFlights = state.all.map((flight) => ({ ...flight }));
      return {
        all: state.all.map((flight) => ({ ...flight })),
        filtered: allFlights.filter(
          (flight) =>
            flight.arrival === action.payload.arrival &&
            flight.departure === action.payload.departure &&
            flight.arrivalDate === action.payload.arrivalDate &&
            flight.departureDate === action.payload.departureDate
        )
      };

    default:
      return state;
  }
};

export default flightsReducer;
