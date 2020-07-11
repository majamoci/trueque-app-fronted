import { combineReducers } from 'redux';
import login from './auth.reducer';
import register from './register.reducer';
import user from './role.reducer';
import drawer from './drawer.reducer';

const rootReducer = combineReducers({
  register,
  login,
  user,
  drawer
});

export default rootReducer;