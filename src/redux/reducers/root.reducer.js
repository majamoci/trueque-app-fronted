import { combineReducers } from 'redux';
import login from './auth.reducer';
import user from './role.reducer';
import drawer from './drawer.reducer';

const rootReducer = combineReducers({
  login,
  user,
  drawer
});

export default rootReducer;