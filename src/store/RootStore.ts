import {combineReducers, createStore} from 'redux';
import {ContactReducers} from './contact/ContactReducers';

const finalReducers = combineReducers({
  contacts: ContactReducers,
});

export const store = createStore(finalReducers);
