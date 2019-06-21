/**
*   Description: Reducers file for ForgotPass actions
**/
// Constants for actions
import { USER_LOGGED } from './../../constants/reduxActions';
  
export const  userReducer = (state = {}, action) => {
      switch (action.type) {
          case USER_LOGGED:
                return { ...state,...action.user, };
          default:
            return state;
      }
  }