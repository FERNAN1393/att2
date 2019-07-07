//Action constants
import { 
    GET_EMP_CALENDARS_REQUEST, 
    GET_EMP_CALENDARS_SUCCESS, 
    GET_EMP_CALENDARS_ERROR 
} from './../../constants/reduxActions';
import {SelectCalendarsBySapId} from '../../controllers/ctrl.Calendar';

const getEmpCalendarsRequest = () => ({
    type: GET_EMP_CALENDARS_REQUEST,
    payload: {
        loading: true
    }
});

const getEmpCalendarsSuccess = calendars => ({
    type: GET_EMP_CALENDARS_SUCCESS,
    payload: {
        loading: false,
        calendars: calendars
    }
});

const getEmpCalendarsError = error => ({
    type: GET_EMP_CALENDARS_ERROR,
    payload: {
        loading: false,
        error: error
    }
});

/*
* @abstract Action that requests all employee calendars from database, 
* and dispatch actions depending on request state
*/
export const getEmpCalendars = sapId => async dispatch => {
    try {
        dispatch(getEmpCalendarsRequest());
        //const calendars = await emulateRequest();
        const calendars = await SelectCalendarsBySapId(sapId);
        if (calendars) {
            dispatch(getEmpCalendarsSuccess(calendars));
        } else {
            dispatch(getEmpCalendarsSuccess([]));
        }
    } catch (e) {
        dispatch(getEmpCalendarsError(e));
    }  
};

const emulateRequest = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(empCalendars)
        , 2000);
    });
};

const empCalendars = [
  {
    year: '2018',
    employeeName: 'KARTHICK NATARAJAN',
    sapId: '51300271',
    month: '1',
    days: [
      {
        day: '1',
        value: 'S'
      },
      {
        day: '2',
        value: 'H'
      },
      {
        day: '3',
        value: 'S'
      },
      {
        day: '4',
        value: 'H'
      },
      {
        day: '5',
        value: 'S'
      },
      {
        day: '6',
        value: 'S'
      },
      {
        day: '7',
        value: 'S'
      },
      {
        day: '8',
        value: 'S'
      },
      {
        day: '9',
        value: 'S'
      },
      {
        day: '10',
        value: 'S'
      },
      {
        day: '11',
        value: 'S'
      },
      {
        day: '12',
        value: 'S'
      },
      {
        day: '13',
        value: 'S'
      },
      {
        day: '14',
        value: 'O'
      },
      {
        day: '15',
        value: 'S'
      },
      {
        day: '16',
        value: 'S'
      },
      {
        day: '17',
        value: 'S'
      },
      {
        day: '18',
        value: 'S'
      },
      {
        day: '19',
        value: 'S'
      },
      {
        day: '20',
        value: 'S'
      },
      {
        day: '21',
        value: 'S'
      },
      {
        day: '22',
        value: 'S'
      },
      {
        day: '23',
        value: 'S'
      },
      {
        day: '24',
        value: 'S'
      },
      {
        day: '25',
        value: 'S'
      },
      {
        day: '26',
        value: 'S'
      },
      {
        day: '27',
        value: 'S'
      },
      {
        day: '28',
        value: 'S'
      },
      {
        day: '29',
        value: 'T'
      },
      {
        day: '30',
        value: 'T'
      },
      {
        day: '31',
        value: 'T'
      }
    ]
  },
  {
    year: '2019',
    employeeName: 'KARTHICK NATARAJAN',
    sapId: '51300271',
    month: '2',
    days: [
      {
        day: '1',
        value: 'S'
      },
      {
        day: '2',
        value: 'H'
      },
      {
        day: '3',
        value: 'S'
      },
      {
        day: '4',
        value: 'H'
      },
      {
        day: '5',
        value: 'S'
      },
      {
        day: '6',
        value: 'S'
      },
      {
        day: '7',
        value: 'S'
      },
      {
        day: '8',
        value: 'S'
      },
      {
        day: '9',
        value: 'S'
      },
      {
        day: '10',
        value: 'S'
      },
      {
        day: '11',
        value: 'S'
      },
      {
        day: '12',
        value: 'S'
      },
      {
        day: '13',
        value: 'S'
      },
      {
        day: '14',
        value: 'O'
      },
      {
        day: '15',
        value: 'S'
      },
      {
        day: '16',
        value: 'S'
      },
      {
        day: '17',
        value: 'S'
      },
      {
        day: '18',
        value: 'S'
      },
      {
        day: '19',
        value: 'S'
      },
      {
        day: '20',
        value: 'S'
      },
      {
        day: '21',
        value: 'S'
      },
      {
        day: '22',
        value: 'S'
      },
      {
        day: '23',
        value: 'S'
      },
      {
        day: '24',
        value: 'S'
      },
      {
        day: '25',
        value: 'S'
      },
      {
        day: '26',
        value: 'S'
      },
      {
        day: '27',
        value: 'S'
      },
      {
        day: '28',
        value: 'S'
      },
      {
        day: '29',
        value: 'T'
      },
      {
        day: '30',
        value: 'T'
      },
      {
        day: '31',
        value: 'T'
      }
    ]
  },
  {
    year: '2019',
    employeeName: 'KARTHICK NATARAJAN',
    sapId: '51300271',
    month: '3',
    days: [
      {
        day: '1',
        value: 'S'
      },
      {
        day: '2',
        value: 'S'
      },
      {
        day: '3',
        value: 'S'
      },
      {
        day: '4',
        value: 'H'
      },
      {
        day: '5',
        value: 'S'
      },
      {
        day: '6',
        value: 'S'
      },
      {
        day: '7',
        value: 'S'
      },
      {
        day: '8',
        value: 'S'
      },
      {
        day: '9',
        value: 'S'
      },
      {
        day: '10',
        value: 'S'
      },
      {
        day: '11',
        value: 'S'
      },
      {
        day: '12',
        value: 'S'
      },
      {
        day: '13',
        value: 'S'
      },
      {
        day: '14',
        value: 'S'
      },
      {
        day: '15',
        value: 'S'
      },
      {
        day: '16',
        value: 'S'
      },
      {
        day: '17',
        value: 'S'
      },
      {
        day: '18',
        value: 'S'
      },
      {
        day: '19',
        value: 'S'
      },
      {
        day: '20',
        value: 'S'
      },
      {
        day: '21',
        value: 'S'
      },
      {
        day: '22',
        value: 'S'
      },
      {
        day: '23',
        value: 'S'
      },
      {
        day: '24',
        value: 'S'
      },
      {
        day: '25',
        value: 'S'
      },
      {
        day: '26',
        value: 'S'
      },
      {
        day: '27',
        value: 'S'
      },
      {
        day: '28',
        value: 'S'
      },
      {
        day: '29',
        value: 'T'
      },
      {
        day: '30',
        value: 'O'
      },
      {
        day: '31',
        value: 'X'
      }
    ]
  },
  {
    year: '2019',
    employeeName: 'KARTHICK NATARAJAN',
    sapId: '51300271',
    month: '4',
    days: [
      {
        day: '1',
        value: 'S'
      },
      {
        day: '2',
        value: 'H'
      },
      {
        day: '3',
        value: 'S'
      },
      {
        day: '4',
        value: 'H'
      },
      {
        day: '5',
        value: 'S'
      },
      {
        day: '6',
        value: 'S'
      },
      {
        day: '7',
        value: 'S'
      },
      {
        day: '8',
        value: 'S'
      },
      {
        day: '9',
        value: 'S'
      },
      {
        day: '10',
        value: 'S'
      },
      {
        day: '11',
        value: 'S'
      },
      {
        day: '12',
        value: 'S'
      },
      {
        day: '13',
        value: 'S'
      },
      {
        day: '14',
        value: 'O'
      },
      {
        day: '15',
        value: 'S'
      },
      {
        day: '16',
        value: 'S'
      },
      {
        day: '17',
        value: 'S'
      },
      {
        day: '18',
        value: 'S'
      },
      {
        day: '19',
        value: 'S'
      },
      {
        day: '20',
        value: 'S'
      },
      {
        day: '21',
        value: 'S'
      },
      {
        day: '22',
        value: 'S'
      },
      {
        day: '23',
        value: 'S'
      },
      {
        day: '24',
        value: 'S'
      },
      {
        day: '25',
        value: 'S'
      },
      {
        day: '26',
        value: 'S'
      },
      {
        day: '27',
        value: 'S'
      },
      {
        day: '28',
        value: 'S'
      },
      {
        day: '29',
        value: 'T'
      },
      {
        day: '30',
        value: 'T'
      },
      {
        day: '31',
        value: 'T'
      }
    ]
  }
];