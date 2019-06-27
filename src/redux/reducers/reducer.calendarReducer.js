//Action constants
import { 
    GET_EMP_CALENDARS_REQUEST, 
    GET_EMP_CALENDARS_SUCCESS, 
    GET_EMP_CALENDARS_ERROR,
    POST_EMP_CALENDAR_REQUEST,
    POST_EMP_CALENDAR_SUCCESS,
    POST_EMP_CALENDAR_ERROR
} from './../../constants/reduxActions';

const calendarReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_EMP_CALENDARS_REQUEST:
            return {
                ...state,
                ...action.payload
            };
        case GET_EMP_CALENDARS_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case GET_EMP_CALENDARS_ERROR:
            return {
                ...state,
                ...action.payload
            };
        case POST_EMP_CALENDAR_REQUEST:
            return {
                ...state,
                ...action.payload
            };
        case POST_EMP_CALENDAR_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case POST_EMP_CALENDAR_ERROR:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default calendarReducer;