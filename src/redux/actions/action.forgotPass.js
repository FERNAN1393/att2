/**
*   Description: Actions file for ForgotPass Container
**/
// Constants for actions
import {
  GETTING_REQUEST,
  REQUEST_SAPID_SUCCESS,
  REQUEST_SAPID_ERROR
} from './../../constants/reduxActions';
// Controllers for actions
import { chkSapId } from './../../controllers/ctrl.ForgotPass';
/** --------------------        Getting state manager       -----------------**/
const gettingRequest = () => {
  return {
    type: GETTING_REQUEST,
    payload: {
      status: 'loading'
    }
  };
};
/** --------------------     SapId state manager actions    -----------------**/
//  When success...
const sapIdSuccess = response => {
  return {
    type: REQUEST_SAPID_SUCCESS,
    payload: {
      response: response,
      status: 'success'
    }
  };
};
//  If error...
const sapIDError = error => {
  return {
    type: REQUEST_SAPID_ERROR,
    payload: {
      error: error,
      status: 'error'
    }
  };
};

/** --------------------            DISPATCHERS             -----------------**/
export const checksapIdAction = sapID => {
  return async dispatch => {
    dispatch (gettingRequest());
    try {
      const response = await chkSapId(sapID);
      console.log("RESPUESTA",response)
      if( response ){
        dispatch(sapIdSuccess(response));
      }else{
        dispatch(sapIDError("Not user found with provided sapID")); 
      }
    } catch(error) {
      dispatch(sapIDError(error));
    }
  };
};

