import {Reducer, createStore} from 'redux';

export const globalMockReducers = (store: Reducer) => {
  return createStore(store);
};
