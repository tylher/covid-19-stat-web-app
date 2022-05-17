import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import continents from './continents/continents';

const rootReducer = combineReducers({
  continents,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
