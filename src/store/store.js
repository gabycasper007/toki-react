import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { loadAllFlights } from './sagas/saga';

const __DEV__ = process.env.NODE_ENV !== 'production';
const sagaMiddleware = createSagaMiddleware();

// Declare initial Redux state
const initialState = {};

// Declare list of middlewares
const middleware = [sagaMiddleware];

if (__DEV__) {
  middleware.push(logger);
}

export const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

sagaMiddleware.run(loadAllFlights);
