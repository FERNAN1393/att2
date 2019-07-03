/**
*   Description: Reducers file for ForgotPass actions
**/
// Constants for actions
import { USER_LOGGED, USERS_FETCHED } from './../../constants/reduxActions';
  
export const  userReducer = (state = null , action) => {
      switch (action.type) {
          case USER_LOGGED:
                return { ...(state|| {}),...action.user, };
          default:
            return state;
      }
  }
  
  export const  usersReducer = (state = [] , action) => {
      switch (action.type) {
          case USERS_FETCHED:
                return  action.users;
          default:
            return state;
      }
  }