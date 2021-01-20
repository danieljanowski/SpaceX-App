import { combineReducer } from 'redux';
import apiReducer from './apiReducer';

const rootReducer = combineReducer({
  apiReducer,
});

export default rootReducer;
