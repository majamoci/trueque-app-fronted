import { combineReducers } from 'redux';
import login from './auth.reducer';
import register from './register.reducer';
import reset from "./send-pw.reducer";
import change from "./change-pw.reducer";
import otp from "./otp.reducer";
import drawer from './drawer.reducer';
import dialog from "./dialog.reducer";
import _new from './publications/create.reducer';
import categories from './publications/categories.reducer';
import publications from './publications/publications.reducer';

const auth = combineReducers({
  register,
  login,
  reset,
  otp,
  change,
  drawer
});

const user = combineReducers({
  dialog
});

const publication = combineReducers({
  _new,
  categories,
  publications
});

const rootReducer = combineReducers({
  auth,
  user,
  publication,
});

export default rootReducer;