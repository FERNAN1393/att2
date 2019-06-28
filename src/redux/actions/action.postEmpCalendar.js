//Action constants
import { 
    POST_EMP_CALENDAR_REQUEST,
    POST_EMP_CALENDAR_SUCCESS,
    POST_EMP_CALENDAR_ERROR
} from './../../constants/reduxActions';
import {CreateCalendar} from '../../controllers/ctrl.Calendar';

const postEmpCalendarsRequest = () => ({
    type: POST_EMP_CALENDAR_REQUEST,
    payload: {
        loading: true
    }
});

const postEmpCalendarsSuccess = () => ({
    type: POST_EMP_CALENDAR_SUCCESS,
    payload: {
        loading: false,
        status: {
            code: 'ok',
            message: 'Calendar was successfully submitted.'
        }
    }
});

const postEmpCalendarsError = error => ({
    type: POST_EMP_CALENDAR_ERROR,
    payload: {
        loading: false,
        status: {
            code: 'error',
            message: error
        }
    }
});

/*
* @abstract Action that requests all employee calendars from database, 
* and dispatch actions depending on request state
* @param {object} calendar An object that contains all the data regarding the 
* employee's calendar that is going to be submitted to database.
*/
export const postEmpCalendar = calendar => async dispatch => {
    try {
        dispatch(postEmpCalendarsRequest());
        const response = await CreateCalendar(calendar);
        if (response) {
            dispatch(postEmpCalendarsSuccess());
        } else {
            dispatch(postEmpCalendarsSuccess());
        }
    } catch (e) {
        dispatch(postEmpCalendarsError(e));
    }  
};