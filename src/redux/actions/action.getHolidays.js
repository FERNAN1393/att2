//Action constants
import { 
    GET_HOLIDAYS_REQUEST, 
    GET_HOLIDAYS_SUCCESS, 
    GET_HOLIDAYS_ERROR 
} from './../../constants/reduxActions';


const getHolidaysRequest = () => ({
    type: GET_HOLIDAYS_REQUEST,
    payload: {
        loading: true
    }
});

const getHolidaysSuccess = holidays => ({
    type: GET_HOLIDAYS_SUCCESS,
    payload: {
        loading: false,
        holidays: holidays
    }
});

const getHolidaysError = error => ({
    type: GET_HOLIDAYS_ERROR,
    payload: {
        loading: false,
        error: error
    }
});

/*
* @abstract Action that requests all holidays from database, 
* and dispatch actions depending on request state
*/
export const getHolidays = () => async dispatch => {
    try {
        dispatch(getHolidaysRequest());
        const holidays = await emulateRequest();
        if (holidays) {
            dispatch(getHolidaysSuccess(holidays));
        } else {
            dispatch(getHolidaysSuccess({}));
        }
    } catch (e) {
        dispatch(getHolidaysError(e));
    }  
};

const emulateRequest = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(holidays)
        , 2000);
    });
};

const holidays = [
  {
    holidayName: "New Year",
    holidayDescription: "Happy",
    holidayType: "National holiday",
    holidayDate: "00/01/19",
    createdBy: "Admin",
    createdAt: "11/12/2018",
    status: "active",
    year: "2019"
  },
  {
    holidayName: "Constitution Day",
    holidayDescription: "Constitution Day",
    holidayType: "Non-workable day",
    holidayDate: "01/04/19",
    createdBy: "Guillermina ",
    createdAt: "1/11/2019",
    status: "active",
    year: "2019"
  },
  {
    holidayName: "Benito Juarez Day ",
    holidayDescription: "Benito Juarez Day ",
    holidayType: "Non-workable day",
    holidayDate: "02/18/19",
    createdBy: "Guillermina ",
    createdAt: "1/11/2019",
    status: "active",
    year: "2019"
  },
  {
    holidayName: "Maundy Thursday",
    holidayDescription: "Maundy Thursday",
    holidayType: "HCL DayOff",
    holidayDate: "03/18/19",
    createdBy: "Guillermina ",
    createdAt: "1/11/2019",
    status: "active",
    year: "2019"
  },
  {
    holidayName: "Good Friday ",
    holidayDescription: "Good Friday ",
    holidayType: "HCL DayOff",
    holidayDate: "03/19/19",
    createdBy: "Guillermina ",
    createdAt: "1/11/2019",
    status: "active",
    year: "2019"
  },
  {
    holidayName: "Labour Day ",
    holidayDescription: "Labour Day ",
    holidayType: "National holiday",
    holidayDate: "04/01/19",
    createdBy: "Guillermina ",
    createdAt: "1/11/2019",
    status: "active",
    year: "2019"
  },
  {
    holidayName: "Dia de la independecia",
    holidayDescription: "National",
    holidayType: "National holiday",
    holidayDate: "08/16/19",
    createdBy: "Admin",
    createdAt: "0/3/2019",
    status: "active",
    year: "2019"
  },
  {
    holidayName: "Chirstmas",
    holidayDescription: "Merry Christmas to everyone!",
    holidayType: "Non-workable day",
    holidayDate: "11/25/18",
    createdBy: "Admin",
    createdAt: "11/13/2018",
    status: "active",
    year: "2018"
  },
  {
    holidayName: "Special day",
    holidayDescription: "A special day",
    holidayType: "Non-workable day",
    holidayDate: "4/5/19",
    createdBy: "Admin",
    createdAt: "11/13/2018",
    status: "active",
    year: "2019"
  },
  {
    holidayName: "Special day",
    holidayDescription: "A special day",
    holidayType: "National holiday",
    holidayDate: "4/6/19",
    createdBy: "Admin",
    createdAt: "11/13/2018",
    status: "active",
    year: "2019"
  },
  {
    holidayName: "Special day",
    holidayDescription: "A special day",
    holidayType: "Non-workable day",
    holidayDate: "5/5/19",
    createdBy: "Admin",
    createdAt: "11/13/2018",
    status: "active",
    year: "2019"
  },
  {
    holidayName: "Special day",
    holidayDescription: "A special day",
    holidayType: "Non-workable day",
    holidayDate: "5/10/19",
    createdBy: "Admin",
    createdAt: "11/13/2018",
    status: "active",
    year: "2019"
  }
];