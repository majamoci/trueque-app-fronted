import { combineReducers } from 'redux';
// auth
import otp from "./otp.reducer";
import login from './auth.reducer';
import reset from "./send-pw.reducer";
import drawer from './drawer.reducer';
import change from "./change-pw.reducer";
import register from './register.reducer';
// user
import users from "./users/users.reducer";
import dialog from "./users/dialog.reducer";
import profile from "./users/profile.reducer";
import mini_profile from "./users/mini_profile.reducer";
// publication
import _pub_tab from "../ducks/_pub_tab.duck";
import new_pub from './publications/create.reducer';
import publications from './publications/publications.reducer';
// backdrops
import _login from "../ducks/_login.duck";
import _new_pub from "../ducks/_new_pub.duck";
import _register from "../ducks/_register.duck";
import _new_psswd from "../ducks/_new_psswd.duck";
import _send_email from "../ducks/_send_email.duck";
import _verify_otp from "../ducks/_verify_otp.duck";

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
  new: new_pub,
  all: publications,
  _pub_tab,
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