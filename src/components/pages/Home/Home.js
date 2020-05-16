import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOAD_ALL_FLIGHTS } from '../../../store/actions/types';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_ALL_FLIGHTS });
  }, []);

  return <h1>Home</h1>;
};

export default Home;
