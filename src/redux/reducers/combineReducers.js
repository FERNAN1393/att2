/**
*   Description: Combine reducers file
**/

import { combineReducers  } from 'redux';
import forgotPass from './reducer.forgotPass';

export default combineReducers({
  forgotPass,
});