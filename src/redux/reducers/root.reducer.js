import { combineReducers } from 'redux';
import login from './auth.reducer';
import register from './register.reducer';
import reset from "./send-pw.reducer";
import change from "./change-pw.reducer";
import otp from "./otp.reducer";
import drawer from './drawer.reducer';
import _new from './publications/create.reducer';

const auth = combineReducers({
  register,
  login,
  reset,
  otp,
  change,
  drawer
});

const publication = combineReducers({
  _new,
});

const rootReducer = combineReducers({
  auth,
  publication,
});

export default rootReducer;