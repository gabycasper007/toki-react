import { all, takeLatest } from 'redux-saga/effects';
import { filterFlights } from './filterFlightsSaga';
import { loadAllFlightsAsync } from './loadFlightsSaga';
import { LOAD_ALL_FLIGHTS, FILTER_FLIGHTS } from '../actions/types';

export function* rootSaga() {
  yield all([
    takeLatest(LOAD_ALL_FLIGHTS, loadAllFlightsAsync),
    takeLatest(FILTER_FLIGHTS, filterFlights)
  ]);
}
