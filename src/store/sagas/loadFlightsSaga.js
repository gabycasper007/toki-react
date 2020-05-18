import { put } from 'redux-saga/effects';

import { formatDate } from '../../helpers/date';
import { LOAD_ALL_FLIGHTS_ASYNC } from '../actions/types';
import { cheapFlights, businessFlights } from '../../constants/flights';

export function* loadAllFlightsAsync() {
  const allFlights = cheapFlights.data
    .map((flight) => {
      const [arrival, departure] = flight.route.split('-');
      return {
        arrivalTime: flight.arrival,
        departureTime: flight.departure,
        arrivalDate: formatDate(flight.arrival),
        departureDate: formatDate(flight.departure),
        arrival,
        departure,
        type: 'cheap'
      };
    })
    .concat(
      businessFlights.data.map((flight) => ({
        ...flight,
        arrivalDate: formatDate(flight.arrivalTime),
        departureDate: formatDate(flight.departureTime),
        type: 'business'
      }))
    );

  yield put({ type: LOAD_ALL_FLIGHTS_ASYNC, flights: allFlights });
}
