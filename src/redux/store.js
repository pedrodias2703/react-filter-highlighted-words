import { combineReducers, createStore } from 'redux';
import reducers from './reducers';

const reducer = combineReducers(reducers);

// Creating the store configuration
const store = createStore(
  reducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default store;
