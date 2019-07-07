/**
*   Description: Combine reducers file
**/

import { combineReducers  } from 'redux';
import forgotPassReducer from './reducer.forgotPass';
import { userReducer, usersReducer } from './reducer.user';

import holidaysReducer from './reducer.holidaysReducer';
import calendarReducer from './reducer.calendarReducer';

import saveNewUserReducer from './reducer.createAccountReducer';
export const rootReducer = combineReducers({
  calendar: calendarReducer,
  forgotPassReducer,
  user: userReducer, 
  users: usersReducer,
  holidays: holidaysReducer,
  saveNewUserReducer
});