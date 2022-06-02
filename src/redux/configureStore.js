import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import continents from './continents/continents';
import countries from './countries/countries';

const rootReducer = combineReducers({
  continents, countries,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
