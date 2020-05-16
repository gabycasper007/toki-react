import React, { useEffect } from 'react';
import Axios from '../../../axios';
import { cheapFlights, businessFlights } from '../../../constants/flights';

const Home = () => {
  useEffect(() => {
    const getData = async () => {
      // const { data: cheapFlights } = await Axios.get('flights/cheap');
      // const { data: businessFlights } = await Axios.get('flights/business');

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

      console.log(allFlights);
    };

    getData();
  }, []);

  return <h1>Home</h1>;
};

export default Home;
