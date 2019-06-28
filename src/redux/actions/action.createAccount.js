/**
*   Description: Actions file for CreateAccount Container
**/
// Constants for actions
import {
  GETTING_REQUEST_CREATEACCOUNT,
  REQUEST_CREATEACCOUNT_SUCCESS,
  REQUEST_CREATEACCOUNT_ERROR
} from './../../constants/reduxActions';

//Controller
import { CreateAttUser } from './../../controllers/ctrl.ShiftUser';

/** --------------------        Getting state manager       -----------------**/
const gettingRequest = () => {
  return {
    type: GETTING_REQUEST_CREATEACCOUNT,
    payload: {
      status: 'loading'
    }
  };
};
/** --------------------     SapId state manager actions    -----------------**/
//  When success...
const sapIdSuccess = response => {
  return {
    type: REQUEST_CREATEACCOUNT_SUCCESS,
    payload: {
      response: response,
      status: 'success'
    }
  };
};
//  If error...
const sapIDError = error => {
  return {
    type: REQUEST_CREATEACCOUNT_ERROR,
    payload: {
      error: error,
      status: 'error'
    }
  };
};

/** --------------------            DISPATCHERS             -----------------**/
export const saveNewUserAction = newUserObj => {
  return async dispatch => {
    dispatch (gettingRequest());
    try {
      const response = await CreateAttUser(newUserObj);
      if( response ){
        dispatch(sapIdSuccess(response));
      }else{
        dispatch(sapIDError("Can not create new User")); 
      }
    } catch(error) {
      dispatch(sapIDError(error));
    }
  };
};
