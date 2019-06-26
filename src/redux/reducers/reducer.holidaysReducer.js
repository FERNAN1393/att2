//Action constants
import { 
    GET_HOLIDAYS_REQUEST, 
    GET_HOLIDAYS_SUCCESS, 
    GET_HOLIDAYS_ERROR 
} from './../../constants/reduxActions';

const holidaysReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_HOLIDAYS_REQUEST:
            return {
                ...state,
                ...action.payload
            };
        case GET_HOLIDAYS_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case GET_HOLIDAYS_ERROR:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default holidaysReducer;