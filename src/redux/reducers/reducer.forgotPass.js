/**
*   Description: Reducers file for ForgotPass actions
**/
// Constants for actions
import {
  GETTING_REQUEST,
  REQUEST_SAPID_SUCCESS,
  REQUEST_SAPID_ERROR
} from './../../constants/reduxActions';

const initialState = {
    status: 'success'
}
export default function forgotPassReducer(state = initialState, action) {
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