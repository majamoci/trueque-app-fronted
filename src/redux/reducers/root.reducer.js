import { combineReducers } from 'redux';
import login from './auth.reducer';
import user from './role.reducer';

const rootReducer = combineReducers({
  login,
  user
});

export default rootReducer;