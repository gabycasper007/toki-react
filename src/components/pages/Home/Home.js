import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOAD_ALL_FLIGHTS } from '../../../store/actions/types';
import Search from '../../molecules/Search/Search';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_ALL_FLIGHTS });
  }, []);

  return (
    <div className="container">
      <h1>Home</h1>

      <Search />
    </div>
  );
};

export default Home;
