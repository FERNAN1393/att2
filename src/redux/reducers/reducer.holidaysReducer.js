//Action constants
import { 
    GET_HOLIDAYS_REQUEST, 
    GET_HOLIDAYS_SUCCESS, 
    GET_HOLIDAYS_ERROR,
    POST_HOLIDAY_REQUEST, 
    POST_HOLIDAY_SUCCESS, 
    POST_HOLIDAY_ERROR,
    DELETE_HOLIDAY_REQUEST, 
    DELETE_HOLIDAY_SUCCESS, 
    DELETE_HOLIDAY_ERROR 
} from './../../constants/reduxActions';

/*UGLY*/
const holidaysReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_HOLIDAYS_REQUEST:
        case GET_HOLIDAYS_SUCCESS:
        case GET_HOLIDAYS_ERROR:
        case POST_HOLIDAY_REQUEST:
        case POST_HOLIDAY_SUCCESS:
        case POST_HOLIDAY_ERROR:
        case DELETE_HOLIDAY_REQUEST:
        case DELETE_HOLIDAY_SUCCESS:
        case DELETE_HOLIDAY_ERROR:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default holidaysReducer;