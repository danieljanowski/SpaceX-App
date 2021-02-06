import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  apiReducer,
  searchReducer,
});

export default rootReducer;
