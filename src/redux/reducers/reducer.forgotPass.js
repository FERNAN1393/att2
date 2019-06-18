/**
*   Description: Reducers file for ForgotPass actions
**/

import { FORGOT_PASS_CHK_SAPID } from './../../constants/reduxActions';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case FORGOT_PASS_CHK_SAPID:
            return {
                ...state,
                forgotObj: action.payload,
            };
        default:
          return state;
    }
}