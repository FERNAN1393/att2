//Action constants
import { 
    POST_HOLIDAY_REQUEST, 
    POST_HOLIDAY_SUCCESS, 
    POST_HOLIDAY_ERROR 
} from './../../constants/reduxActions';
import {CreateShiftHoliday} from '../../controllers/ctrl.Holiday';

const postHolidayRequest = () => ({
    type: POST_HOLIDAY_REQUEST,
    payload: {
        loading: true
    }
});

const postHolidaySuccess = () => ({
    type: POST_HOLIDAY_SUCCESS,
    payload: {
        loading: false,
        status: {
            code: 'ok',
            message: 'Calendar was successfully submitted.'
        }
    }
});

const postHolidayError = error => ({
    type: POST_HOLIDAY_ERROR,
    payload: {
        loading: false,
        status: {
            code: 'error',
            message: error
        }
    }
});

/*
* @abstract Action that post a new holiday to database, 
* and dispatch actions depending on request state
* @param {object} holiday An object that contains all the data regarding the 
* new holiday
*/
export const postHoliday = holiday => async dispatch => {
    try {
        dispatch(postHolidayRequest());
        const response = await CreateShiftHoliday(holiday);
        if (response) {
            dispatch(postHolidaySuccess());
        } else {
            dispatch(postHolidayError('Something went wrong'));
        }
    } catch (e) {
        dispatch(postHolidayError(e));
    }  
};
