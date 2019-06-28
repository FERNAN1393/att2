/**
*   Description: Reducers file for ForgotPass actions
**/
// Constants for actions
import {
  GETTING_REQUEST_CREATEACCOUNT,
  REQUEST_CREATEACCOUNT_SUCCESS,
  REQUEST_CREATEACCOUNT_ERROR
} from './../../constants/reduxActions';

const initialState = { 
    error: {
        message : "Please fill all data fields"
    },
    
};

export default function saveNewUserReducer(state = initialState, action) {
    switch (action.type) {
        case GETTING_REQUEST_CREATEACCOUNT:
            state = {
                ...state,
                ...action.payload,
            };
            return state
        case REQUEST_CREATEACCOUNT_SUCCESS:
            state = {
                ...state,
                ...action.payload,
            };
            return state
        case REQUEST_CREATEACCOUNT_ERROR:
            state = {
                ...state,
                ...action.payload,
            };
            return state
        default:
          return null;
    }
}