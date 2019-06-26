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
import { ExtractUserBySapId } from './../../controllers/ctrl.ShiftUser';

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
      const response = await ExtractUserBySapId(sapID);
      if (response !== null){
        dispatch(sapIdSuccess(response));  
      }
        dispatch(sapIDError("There are not records with given SapId"));
    } catch(error) {
      dispatch(sapIDError(error));
    }
  };
};

