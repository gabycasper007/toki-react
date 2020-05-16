import { takeEvery, put } from 'redux-saga/effects';
import { LOAD_ALL_FLIGHTS, LOAD_ALL_FLIGHTS_ASYNC } from '../actions/types';
import { cheapFlights, businessFlights } from '../../constants/flights';

function* loadAllFlightsAsync() {
  const allFlights = cheapFlights.data
    .map((flight) => {
      const [arrival, departure] = flight.route.split('-');
      return {
        arrivalTime: flight.arrival,
        departureTime: flight.departure,
        arrival,
        departure,
        type: 'cheap'
      };
    })
    .concat(
      businessFlights.data.map((flight) => ({
        ...flight,
        type: 'business'
      }))
    );

  yield put({ type: LOAD_ALL_FLIGHTS_ASYNC, flights: allFlights });
}

export function* loadAllFlights() {
  yield takeEvery(LOAD_ALL_FLIGHTS, loadAllFlightsAsync);
}
