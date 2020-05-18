import { put } from 'redux-saga/effects';
import { FILTERED_FLIGHTS } from '../actions/types';

export function* filterFlights(action) {
  yield put({ type: FILTERED_FLIGHTS, payload: action.payload });
}
