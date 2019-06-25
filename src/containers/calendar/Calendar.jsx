import React, { Component } from "react";
import PropTypes from "prop-types";
//import {get, post } from "../axios/";
import { Alert, Button, DropdownItem, Row, Col } from "reactstrap";
import CalendarAdminControlPanel from "../../components/calendar/CalendarAdminControlPanel";
import CalendarUserPanel from "../../components/calendar/CalendarUserPanel";
import CalendarMonth from "../../components/calendar/CalendarMonth";
import {
  MONTHS_LONG,
  DAYS_IN_MONTH,
  EXTRA_DAY_TYPE,
  DAY_TYPE,
  ADMIN_USER,
  GET_CALENDAR_URL,
  UPLOAD_CALENDAR_URL,
  GET_HOLIDAYS_URL
} from "../../constants/util";
import PopUpLoading from "../../components/pop_up_loading/PopUpLoading";

import "../../resources/css/calendar/calendar.css";

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

const empCalendar = [
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
  },
  {
    year: '2019',
    employeeName: 'KARTHICK NATARAJAN',
    sapId: '51300271',
    month: '5',
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

class Calendar extends Component {
  constructor(props) {
    super(props);
    
    this.user = {
      projectName: 'USAA EIS MCA Mexico',
      projectCode: 'C/140685',
      reportingManager: '51477851',
      sapId: '51643140',
      batchNumber: '302',
      employeeName: 'SIMON PEDRO GUERRERO AGUILAR',
      email: 'Simon.Aguilar@hcl.com',
      role: '2',
      client: 'USAA',
      status: 'active'
    };

    this.state = {
      calendarEmployee:
        this.user.role === ADMIN_USER ? null : this.user,
      month: null, //Days of month CHANGE
      empCalendarsRegistered: null,//null, //Registered calendars by employee
      holidays: {},
      isEditableMonth: false,
      //selectedMonth: new Date().getMonth() + 1, //Next month
      selectedMonth: new Date().getMonth(), //Actual month
      selectedYear: new Date().getFullYear(),
      alerts: false,
      typeAlert: "",
      modalAppear: false,
      uploading: false,
      loading: false
    };
    
    
  }

  /** 
   * @abstract Request for holidays before component is mounted.
   */
  componentWillMount = () => {
    const holidaysObj = {};
    let day, month, year;
    //console.log('Data', res.data); //Get all holidays
    for (let i = 0; i < holidays.length; i++) {
      //Roam holidays
      let holiday = holidays[i];
      [month, day] = holiday.holidayDate.split("/"); //Has format mm/dd/yy and they start from 0
      year = parseInt(holiday.year);
      month = parseInt(month);
      day = parseInt(day);
      if (!holidaysObj.hasOwnProperty(year)) {
        //Create year object
        holidaysObj[year] = {};
      }
      if (!holidaysObj[year].hasOwnProperty(month)) {
        //Create month object
        holidaysObj[year][month] = {};
      }
      if (!holidaysObj[year][month].hasOwnProperty(day)) {
        //Create day object
        holidaysObj[year][month][day] = {
          holidaysInfo: []
        };
      }
      holidaysObj[year][month][day].holidaysInfo.push({
        name: holiday.holidayName,
        type: holiday.holidayType,
        description: holiday.holidayDescription
      });
    }
    // this.fillMonth(
    //   this.state.selectedMonth,
    //   this.state.selectedYear,
    //   this.state.empCalendarsRegistered,
    //   holidaysObj
    // );
    this.setState({
      holidays: holidaysObj
    });
  };

  /** 
   * @abstract Calls component's updateCalendars method
   */
  componentDidMount = () => {
    this.updateCalendars();
  };

  /** 
   * @abstract Checks if the given day is non workable.
   * @param {number} day Day's number in the month
   * @param {number} month Month's number, if not given, state's selected month is used.
   * @param {number} year Year, if not given, state's selected year is used.
   */
  isNonWorkableDay = (
    day,
    month = this.state.selectedMonth,
    year = this.state.selectedYear
  ) => {
    try {
      return (
        this.state.holidays[year][month][day].holidaysInfo[0].type ===
        "Non-workable day"
      );
    } catch (error) {
      return false;
    }
  };
  
  isHoliday = (day, month, year) => {
    try {
      const holidayType = this.state.holidays[year][month][day].holidaysInfo[0]
        .type;
      return holidayType === "National holiday" || holidayType === "HCL DayOff";
    } catch (error) {
      return false;
    }
  };

  checkIfIsEditableMonth = (month, year) => {
    const date = new Date();
    const actualYear = date.getFullYear();
    const actualMonth = date.getMonth();
    return (
      (year === actualYear && actualMonth - 1 <= month) ||
      (year + 1 === actualYear && month === 11 && actualMonth === 0) ||
      year > actualYear
    );
  };

  /** 
   * @abstract Fills state month using the employee's data. If employee's data is empty
   * , fills month with empty values.
   * @param {number} month The actual month. If not passed, is equal to state's selectedMonth.
   * @param {number} year Actual year. If not passed, is equal to state's selectedYear
   * @param {array} empCalendarsRegistered Array with all the registered employee calendars
   * @param {object} object Object with all registered holidays
   */
  fillMonth = (
    month = this.state.selectedMonth,
    year = this.state.selectedYear,
    empCalendarsRegistered = this.state.empCalendarsRegistered,
    holidays = this.state.holidays
  ) => {
    const monthCalendar = [];
    const currentEmpCalendar = empCalendarsRegistered
      ? empCalendarsRegistered.find(
          calendar => parseInt(calendar.month) === month
        )
      : undefined;
    let dayType;
    for (let i = 0; i < DAYS_IN_MONTH; i++) {
      dayType = null;
      if (this.isNonWorkableDay(i + 1, month, year)) {
        dayType = DAY_TYPE["HOLIDAY"];
      } else if (
        currentEmpCalendar !== undefined &&
        currentEmpCalendar.days[i].value !== ""
      ) {
        for (let key in DAY_TYPE) {
          if (DAY_TYPE[key].symbol === currentEmpCalendar.days[i].value) {
            dayType = DAY_TYPE[key];
            break;
          }
        }
      } else if (this.isHoliday(i + 1, month, year)) {
        dayType = DAY_TYPE["HOLIDAY"];
      }
      monthCalendar.push(
        dayType !== null
          ? dayType
          : {
              symbol: "",
              name: "",
              description: ""
            }
      );
    }

    this.setState({
      isEditableMonth: this.checkIfIsEditableMonth(month, year),
      month: monthCalendar
    });
  };

  /** 
   * @abstract Validates that state's month is all filled up.
   * @returns {boolean} True if the period of time was filled correctly, false otherwise
   */
  validateMonth = () => {
    const totalDays = new Date(
      this.state.selectedYear,
      this.state.selectedMonth + 1,
      0
    ).getDate();
    const month = this.state.month;
    for (let i = 0; i < totalDays; i++) {
      if (month[i].symbol === "") {
        return false;
      }
    }
    return true;
    //return this.state.month.find(dayType => dayType.symbol === "") === undefined;
  };

  /** 
   * @abstract Updates state's selectedMonth.
   * If val is a number, is used to update.
   * Otherwise is an event called from CalendarUserPanel. It takes its innerText to search the actual month index on MONTHS_LONG constant.
   * Then calls component's fillMonth's method to update state's month
   * @param {number or event} val Value which has the necessary information to update state's selectedMonth.
   */
  selectMonth = val => {
    const month =
      typeof val === "number"
        ? val
        : MONTHS_LONG.findIndex(month => val.target.innerText === month);
    if (month !== this.state.selectedMonth) {
      //console.log('Set', month);
      this.setState({
        selectedMonth: month
      });
      this.fillMonth(month);
    }
  };

  /** 
   * @abstract Updates state's selectedYear.
   * It's always called from an event on CalendarUserPanel.
   * Then calls component's fillMonth's method to update state's month
   * @param {object} event Default event object which is produced when an event is triggered.
   */
  selectYear = event => {
    const year = parseInt(event.target.innerText);
    if (year !== this.state.selectedYear) {
      const date = new Date();
      let month;
      if (
        year === date.getFullYear() &&
        this.state.selectedMonth > date.getMonth()
      ) {
        month = date.getMonth();
      } else if (year !== this.state.selectedYear) {
        if (this.state.empCalendarsRegistered === null) {
          month = 0;
        } else {
          const calendars = this.state.empCalendarsRegistered;
          const calendar = calendars.find(
            calendar => parseInt(calendar.year) === year
          );
          if (calendar === undefined) {
            month = 0;
          } else {
            month = parseInt(calendar.month);
          }
        }
      }
      this.fillMonth(month, year);

      this.setState({
        selectedMonth: month,
        selectedYear: year
      });
    }
  };

  /** 
   * @abstract Updates the type of day to the selected days on state's month and empCalendarsRegistered.
   * @param {array} days Array of numbers, specifying the selected days.
   * @param {object} type Selected day type. Consult DAY_TYPES on constants files.
   */
  setDayType = (days, type) => {
    const empCalendarsRegistered = this.state.empCalendarsRegistered;
    const month = this.state.month;
    const calendarIndex = this.searchInEmpCalendars(
      this.state.selectedMonth,
      this.state.selectedYear
    );
    let actualCalendar;
    if (calendarIndex !== -1) {
      //Get calendar month from empRegisteredCalendars
      actualCalendar = this.state.empCalendarsRegistered[calendarIndex];
    } else {
      actualCalendar = {
        employeeName: this.state.calendarEmployee.employeeName,
        sapId: this.state.calendarEmployee.sapId,
        year: this.state.selectedYear,
        month: this.state.selectedMonth,
        days: []
      };
      for (let i = 0; i < DAYS_IN_MONTH; i++) {
        actualCalendar.days.push({ day: "", value: "" });
      }
    }
    for (let i = 0; i < days.length; i++) {
      month[days[i] - 1] = type;
      actualCalendar.days[days[i] - 1] = {
        day: days[i],
        value: type.symbol
      };
    }
    this.setState({
      month: month,
      empCalendarsRegistered: [
        ...empCalendarsRegistered.slice(0, calendarIndex),
        actualCalendar,
        ...empCalendarsRegistered.slice(calendarIndex + 1)
      ]
    });
  };

  /** 
   * @abstract Updates state's calendarEmployee, if employee is different to state's calendarEmployee.
   * It also calls component's updateCalendars method to update the UI with new data.
   * @param {object} employee Represents an employee.
   */
  selectEmployee = employee => {
    //console.log('Select employee');
    if (
      this.state.calendarEmployee === null ||
      employee.sapId !== this.state.calendarEmployee.sapId
    ) {
      this.updateCalendars(employee);
      this.setState({
        calendarEmployee: employee
      });
    }
  };

  /** 
   * @abstract Updates state's empCalendarsRegistered.
   * It retrieves a list of calendars from server.
   * @param {object} employee Represents the actual employee. If not given,
   * the app uses state's calendarEmployee
   */
  updateCalendars = (employee = this.state.calendarEmployee) => {
    console.log('Update calendars');
    this.setState({
      empCalendarsRegistered: null
    });
    if (employee !== null) {
      const registeredCalendars = [];
      const date = new Date();
      const year = date.getFullYear(),
        month = date.getMonth();
      //CHANGE with real response
      for (let i = 0; i < Object.keys(empCalendar).length - 1; i++) {
        registeredCalendars.push(empCalendar[i]);
      }
      this.fillMonth(month, year, registeredCalendars); //Fill with actual month data
      this.setState({
        empCalendarsRegistered: registeredCalendars, //Array
        selectedMonth: month, //Actual month
        selectedYear: year,
        loading: false
      });
    }
  };

  searchInEmpCalendars = (month, year) => {
    return this.state.empCalendarsRegistered.findIndex(
      currentCalendar =>
        currentCalendar.month === month && currentCalendar.year === year
    );
  };

  /** @abstract Updates state's empCalendarRegistered in order to keep the data
   * on an actual state, without making a request to the server.
   * If the given calendar isn't in the employee's registered calendars, is appended,
   * otherwise, is overwrited.
   * @param {object} calendar The calendar that is going to be submitted.
   * @returns {array} The updated list of calendars.
   */
  updateEmployeeCalendars = calendar => {
    const empCalendarsRegistered = this.state.empCalendarsRegistered;
    const calendarIndex = this.searchInEmpCalendars(
      calendar.month,
      calendar.year
    );
    //If calendar exists, overwrite it
    if (calendarIndex !== -1) {
      return [
        ...empCalendarsRegistered.slice(0, calendarIndex),
        calendar,
        ...empCalendarsRegistered.slice(calendarIndex + 1)
      ];
    }
    //Otherwise, append it
    return [...empCalendarsRegistered, calendar];
  };

  submitMonth = () => {
    if (this.validateMonth() && this.state.isEditableMonth) {
      const totalDays = new Date(
        this.state.selectedYear,
        this.state.selectedMonth + 1,
        0
      ).getDate(); //Actual month's total days
      const days = [];
      for (let i = 0; i < DAYS_IN_MONTH; i++) {
        days.push({
          day: i + 1,
          value: i < totalDays ? this.state.month[i].symbol : EXTRA_DAY_TYPE
        });
      }
      const calendarPayload = {
        employeeName: this.state.calendarEmployee.employeeName,
        sapId: this.state.calendarEmployee.sapId,
        year: this.state.selectedYear,
        month: this.state.selectedMonth,
        days: days
      };
      this.setState({
        uploading: true
      });
      /*post(UPLOAD_CALENDAR_URL, calendarPayload)
        .then(res => {
          if (res.data == "ok") {
            this.setState({
              alerts: true,
              typeAlert: "success",
              uploading: false,
              empCalendarsRegistered: this.updateEmployeeCalendars(
                calendarPayload
              )
            });
          } else {
            this.setState({
              alerts: true,
              typeAlert: "error",
              uploading: false
            });
          }
          //An calendarEmployee should be already in the state for this
          //this.updateCalendars();
        })
        .catch(error => {
          this.setState({
            alerts: true,
            typeAlert: "warning",
            uploading: false
          });
        });*/
    } else {
      alert("You have to fill all days");
    }
  };

  employeeHasCalendar = calendar => {};

  /*openUserCategory(event) {
    event.preventDefault();
    if(event.currentTarget.id == "openModal") {
       this.setState({
        modalAppear: true
      });
    } else {
      this.setState({
        modalAppear: false
      });
    }
  }*/

  render = () => {
    let alerts;
    if (this.state.alerts) {
      if (this.state.typeAlert === "success") {
        alerts = (
          <Alert color="success"> Shift calendar saved successfully! </Alert>
        );
      } else if (this.state.typeAlert === "error") {
        alerts = (
          <Alert color="danger">
            {" "}
            Error trying to save your calendar, please try again!{" "}
          </Alert>
        );
      } else if (this.state.typeAlert === "warning") {
        alerts = (
          <Alert color="warning"> Warning, we cannot connect to Server! </Alert>
        );
      }
    }

    return (
      <div className="calendar-container">
        <Row>
          <Col sm="12">
            <h1 className="h2">Calendar</h1>
          </Col>
        </Row>

        {this.user.role === ADMIN_USER ? (
          <CalendarAdminControlPanel
            user={this.user}
            calendarUser={this.state.calendarEmployee}
            selectEmployee={this.selectEmployee}
          />
        ) : (
          <React.Fragment />
        )}

        {this.state.calendarEmployee !== null &&
        this.state.empCalendarsRegistered !== null ? (
          <React.Fragment>
            <CalendarUserPanel
              registeredCalendars={this.state.empCalendarsRegistered}
              selectedMonth={this.state.selectedMonth}
              selectedYear={this.state.selectedYear}
              selectMonth={this.selectMonth}
              selectYear={this.selectYear}
              user={this.state.calendarEmployee}
            />

            <Row className="calendar-month-container">
              <Col sm="12">
                <CalendarMonth
                  holidays={this.state.holidays}
                  isNonWorkableDay={this.isNonWorkableDay}
                  month={this.state.selectedMonth}
                  monthTypes={this.state.month}
                  isPastMonth={!this.state.isEditableMonth}
                  setDayType={this.setDayType}
                  year={this.state.selectedYear}
                />
              </Col>
            </Row>

            <Row className="calendar-button-group">
              <Col sm="12">
                <Button
                  color="success"
                  size="lg"
                  onClick={this.submitMonth}
                  disabled={!this.state.isEditableMonth}
                >
                  Submit
                </Button>{" "}
              </Col>
            </Row>

            {this.state.uploading || this.state.loading ? (
              <PopUpLoading
                className="uploading-modal"
                isOpen={this.state.uploading || this.state.loading}
                modalTitle={`${
                  this.state.loading ? "Loading" : "Submitting"
                } calendar`}
              >
                <div className="calendar-loading">
                  <img
                    className="calendar-loading"
                    src={require("../../resources/img/blue_loading.gif")}
                    alt="Loading"
                    style={{ width: "30%", height: "auto" }}
                  />
                </div>
              </PopUpLoading>
            ) : (
              <React.Fragment />
            )}
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}

        <br />
        {alerts}
      </div>
    );
  };
}

Calendar.propTypes = {
  user: PropTypes.object
};

export default Calendar;
