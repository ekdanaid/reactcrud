import { combineReducers } from 'redux';

import action from './action';
import crud from './crud';

const rootReducer = combineReducers({
  action,
  crud
});

export default rootReducer;
