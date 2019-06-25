/**
*   Description: Combine reducers file
**/

import { combineReducers  } from 'redux';
import forgotPassReducer from './reducer.forgotPass';
import { userReducer } from './reducer.user';

export const rootReducer = combineReducers({
  forgotPassReducer,
  user: userReducer
});