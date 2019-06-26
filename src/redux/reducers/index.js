/**
*   Description: Combine reducers file
**/

import { combineReducers  } from 'redux';
import forgotPassReducer from './reducer.forgotPass';
import { userReducer } from './reducer.user';
import saveNewUserReducer from './reducer.createAccountReducer';
export const rootReducer = combineReducers({
  forgotPassReducer,
  saveNewUserReducer,
  user: userReducer
});