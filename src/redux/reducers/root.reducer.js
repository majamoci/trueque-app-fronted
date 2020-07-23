import { combineReducers } from 'redux';
import login from './auth.reducer';
import register from './register.reducer';
import reset from "./send-pw.reducer";
import change from "./change-pw.reducer";
import otp from "./otp.reducer";
import drawer from './drawer.reducer';
import dialog from './dialog.reducer'
const rootReducer = combineReducers({
  register,
  login,
  reset,
  otp,
  change,
  drawer,
  dialog
});

export default rootReducer;