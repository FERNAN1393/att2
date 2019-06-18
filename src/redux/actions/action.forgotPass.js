/**
*   Description: Actions file for ForgotPass Container
**/

import { FORGOT_PASS_CHK_SAPID } from './../../constants/reduxActions';
import { chkSapId } from './../../controllers/ctrl.ForgotPass';

export const forgotPass = sapID => {
  return dispatch => dispatch({
    // Action type
    type: FORGOT_PASS_CHK_SAPID,
    // data
    payload: chkSapId(sapID)
  });
};
