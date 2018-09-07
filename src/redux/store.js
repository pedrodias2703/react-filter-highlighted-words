import { combineReducers, createStore } from 'redux'
import reducers from './reducers'

const reducer = combineReducers(reducers)

const store = createStore(
  reducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default store