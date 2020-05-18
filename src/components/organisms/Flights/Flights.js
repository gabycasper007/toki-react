import React from 'react';
import { useSelector } from 'react-redux';
import style from './Flights.module.scss';

const Flights = () => {
  const flights = useSelector((state) => state.flights.filtered);

  return (
    <>
      {flights.length ? (
        flights.map((flight) => (
          <div
            className={style.flight}
            key={`${flight.departure} ${
              flight.arrival
            } ${flight.departureTime.toString()} ${flight.arrivalTime.toString()}`}
          >
            <div className="departureTime">
              <span>
                <strong>Depart:</strong>
              </span>
              <span>{flight.departure}</span>
              <span>{flight.departureTime.toString()}</span>
            </div>
            <div className="arrivalTime">
              <span>
                <strong>Arrive:</strong>
              </span>
              <span>{flight.arrival}</span>
              <span>{flight.arrivalTime.toString()}</span>
            </div>
            <div className="type">
              <span>
                <strong>Type:</strong>
              </span>
              <span>{flight.type}</span>
            </div>
          </div>
        ))
      ) : (
        <h1>No flights</h1>
      )}
    </>
  );
};

export default Flights;
