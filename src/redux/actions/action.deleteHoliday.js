//Action constants
import { 
    DELETE_HOLIDAY_REQUEST, 
    DELETE_HOLIDAY_SUCCESS, 
    DELETE_HOLIDAY_ERROR 
} from './../../constants/reduxActions';
import {DeleteHoliday} from '../../controllers/ctrl.Holiday';

const deleteHolidayRequest = () => ({
    type: DELETE_HOLIDAY_REQUEST,
    payload: {
        loading: true
    }
});

const deleteHolidaySuccess = () => ({
    type: DELETE_HOLIDAY_SUCCESS,
    payload: {
        loading: false,
        status: {
            code: 'ok',
            message: 'Calendar was successfully submitted.'
        }
    }
});

const deleteHolidayError = error => ({
    type: DELETE_HOLIDAY_ERROR,
    payload: {
        loading: false,
        status: {
            code: 'error',
            message: error
        }
    }
});

/*
* @abstract Action that deletes a holiday in the database, 
* and dispatch actions depending on request state
* @param {object} holiday An object that contains all the data regarding the 
* holiday
*/
export const deleteHoliday = holiday => async dispatch => {
    try {
        dispatch(deleteHolidayRequest());
        const response = await DeleteHoliday(holiday);
        if (response) {
            dispatch(deleteHolidaySuccess());
        } else {
            dispatch(deleteHolidayError('Something went wrong'));
        }
    } catch (e) {
        dispatch(deleteHolidayError(e));
    }  
};
