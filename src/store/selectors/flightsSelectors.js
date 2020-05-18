import { createSelector } from 'reselect';

const allFlights = (state) => state.flights.all;

export const getDepartures = createSelector(allFlights, (flights) =>
  [
    ...flights.reduce((acc, flight) => acc.add(flight.departure), new Set())
  ].sort()
);

export const getArrivals = createSelector(allFlights, (flights) =>
  [
    ...flights.reduce((acc, flight) => acc.add(flight.arrival), new Set())
  ].sort()
);
