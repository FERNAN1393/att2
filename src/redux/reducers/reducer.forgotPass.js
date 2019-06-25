/**
*   Description: Reducers file for ForgotPass actions
**/
// Constants for actions
import {
  GETTING_REQUEST,
  REQUEST_SAPID_SUCCESS,
  REQUEST_SAPID_ERROR
} from './../../constants/reduxActions';


export default function forgotPassReducer(state = {}, action) {
    console.log("raulivan",action.type)
    switch (action.type) {
        case GETTING_REQUEST:
            state = {
                ...state,
                ...action.payload,
            };
            return state
        case REQUEST_SAPID_SUCCESS:
            state = {
                ...state,
                ...action.payload,
            };
            return state
        case REQUEST_SAPID_ERROR:
            state = {
                ...state,
                ...action.payload,
            };
            return state
        default:
          return state;
    }
}