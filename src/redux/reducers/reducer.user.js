/**
*   Description: Reducers file for ForgotPass actions
**/
// Constants for actions
import { USER_LOGGED, USERS_FETCHED, USERS_UPDATED, USERS_DELETED } from './../../constants/reduxActions';
  


export const  userReducer = (state = null , action) => {
      switch (action.type) {
          case USER_LOGGED:
                return { ...(state|| {}),...action.user, };
          default:
            return state;
      }
  }
  const addUsersRoleName = (u)=>u.map((u)=>({...u, roleName: u.role == 1 ? 'Administrador':'User'  }) );
  

  export const  usersReducer = (state = [] , action) => {
      switch (action.type) {
          case USERS_FETCHED:
                return  addUsersRoleName(action.users)
          case USERS_UPDATED:
                  const idsToUpdate = action.users.map(({sapId})=>sapId); 
                  return [...action.users.filter(({ sapId }) =>!idsToUpdate.include(sapId) ), ...addUsersRoleName(action.users)]
            case USERS_DELETED: 
                  const idsToDelete = action.users.map(({sapId})=>sapId);
                  return state.users.filter(({ sapId }) =>!idsToDelete.include(sapId) )
          default:
            return state;
      }
  }