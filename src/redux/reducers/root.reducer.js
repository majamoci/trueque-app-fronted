import { combineReducers } from 'redux';
import login from './auth.reducer';
import register from './register.reducer';
import reset from "./send-pw.reducer";
import change from "./change-pw.reducer";
import otp from "./otp.reducer";
import drawer from './drawer.reducer';
import dialog from "./users/dialog.reducer";
import users from "./users/users.reducer";
import profile from "./users/profile.reducer";
import mini_profile from "./users/mini_profile.reducer";
import newP from './publications/create.reducer';
import publications from './publications/publications.reducer';
import _login from "../ducks/_login.duck";
import _register from "../ducks/_register.duck";
import _send_email from "../ducks/_send_email.duck";
import _verify_otp from "../ducks/_verify_otp.duck";
import _new_psswd from "../ducks/_new_psswd.duck";
import _new_pub from "../ducks/_new_pub.duck";

const auth = combineReducers({
  register,
  login,
  reset,
  otp,
  change,
  drawer
});

const user = combineReducers({
  dialog,
  users,
  profile,
  mini_profile,
});

const publication = combineReducers({
  newP,
  publications,
});

const backdrops = combineReducers({
  _login,
  _register,
  _send_email,
  _verify_otp,
  _new_psswd,
  _new_pub,
});

const rootReducer = combineReducers({
  auth,
  user,
  publication,
  backdrops,
});

export default rootReducer;