//React libraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Row,
  Col
} from "reactstrap";
import FeatherIcon from 'feather-icons-react';
//Attendance constants
import { MONTHS_LONG } from "../../constants/util";

class CalendarUserPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthDropDownOpen: false,
      registeredCalendars: [],
      registeredYears: [],
      yearDropDownOpen: false
    };
  }

  getCalendarsObj = () => {
    const date = new Date();
    const registeredCalendars = [];
    const registeredYears = [];
    let hasLastMonthRegistered = false;
    this.props.registeredCalendars.forEach((monthData, index) => {
      let year;
      let month;
      //Get months and years registered
      //Year and month come as strings
      year = parseInt(monthData.year);
      month = parseInt(monthData.month);
      registeredCalendars.push({
        year: year,
        month: month
      });
      //Ensures that year is unique
      if (!registeredYears.includes(year)) {
        registeredYears.push(year);
      }
      //If actual month is in calendars, then last one is already submited
      if (date.getFullYear() === year && date.getMonth() === month) {
        hasLastMonthRegistered = true;
      }
    });
    //If actual month isn't registered, add it (next month)

    if (!hasLastMonthRegistered) {
      registeredCalendars.push({
        year: date.getFullYear(),
        month: date.getMonth()
      });
    }
    return {
      registeredCalendars,
      registeredYears
    };
  };

  /**@abstract Toggles the dropdown for year
   */
  toggleYear = () => {
    this.setState({
      yearDropDownOpen: !this.state.yearDropDownOpen
    });
  };

  /**@abstract Toggles the dropdown for month
   */
  toggleMonth = () => {
    this.setState({
      monthDropDownOpen: !this.state.monthDropDownOpen
    });
  };
  
  isCalendarRegistered = (calendars, month, year) => {
    return calendars.find(calendar => calendar.month === month && calendar.year === year);
  };

  /**
   * @abstract Settles component's state with proper values, using props.
   * props' selectedMonth should be actual month always.
   * Fill with user data, then with extra months (max two months ahead)
   */
  componentWillMount = () => {
    const { registeredCalendars, registeredYears } = this.getCalendarsObj();
    const actualYearIsRegistered =
      registeredYears.find(year => year === this.props.selectedYear) !==
      undefined;
    const currentMonth = this.props.selectedMonth;
    if (currentMonth >= 10) {
      const nextYear = this.props.selectedYear + 1;
      const newYears = actualYearIsRegistered
        ? [this.props.selectedYear, nextYear]
        : [nextYear];
      const nextMonths = currentMonth === 10  ? [11, 0] : [0, 1];
      let nextYearRegistered = false;
      if (!this.isCalendarRegistered(registeredCalendars, nextMonths[0], this.props.selectedYear)) {
        registeredCalendars.push({ month: nextMonths[0], year: this.props.selectedYear }); 
        registeredYears.push([...newYears]);
        nextYearRegistered = true;
      }
      if (!this.isCalendarRegistered(registeredCalendars, nextMonths[1], nextYear)) {
        registeredCalendars.push({ month: nextMonths[1], year: nextYear });
        if (!nextYearRegistered) {
          registeredYears.push([...newYears]);
        }
      }
    } else {
      const nextMonths = [currentMonth + 1, currentMonth + 2];
      if (!this.isCalendarRegistered(registeredCalendars, nextMonths[0], this.props.selectedYear)) {
        registeredCalendars.push({ month: nextMonths[0], year: this.props.selectedYear }); 
      }
      if (!this.isCalendarRegistered(registeredCalendars, nextMonths[1], this.props.selectedYear)) {
        registeredCalendars.push({ month: nextMonths[1], year: this.props.selectedYear });
      }
      if (!actualYearIsRegistered) {
        registeredYears.push(this.props.selectedYear);
      }
    }
    this.setState({
      registeredCalendars: registeredCalendars.sort((calendar1, calendar2) => calendar1.month > calendar2.month),
      registeredYears: registeredYears
    });
  };

  render = () => {
    const filteredCalendars = this.state.registeredCalendars.filter(
      calendar => this.props.selectedYear === calendar.year
    );
    const monthItems = filteredCalendars.map((calendar, index) => {
      return (
        <DropdownItem key={index} onClick={this.props.selectMonth}>
          {MONTHS_LONG[calendar.month]}
        </DropdownItem>
      );
    });

    const yearItems = this.state.registeredYears.map((year, index) => {
      return (
        <DropdownItem key={index} onClick={this.props.selectYear}>
          {year}
        </DropdownItem>
      );
    });

    return (
      <Row className="calendar-employee-panel">
        <Col className="calendar-user-data" sm="6">
          <h3>{this.props.user.sapId}</h3>
          <h4>{this.props.user.employeeName}</h4>
        </Col>

        <Col className="calendar-time" sm="6">
          <div className="calendar-year">
            <Dropdown
              isOpen={this.state.yearDropDownOpen}
              toggle={this.toggleYear}
            >
              <DropdownToggle
                tag="span"
                onClick={this.toggleYear}
                data-toggle="dropdown"
                aria-expanded={this.state.yearDropDownOpen}
              >
                <h4>
                  {this.props.selectedYear}{" "}
                  {!this.state.yearDropDownOpen ? (
                    <span><FeatherIcon icon="chevron-down"/></span>
                  ) : (
                    <span><FeatherIcon icon="chevron-up"/></span> 
                  )}
                </h4>
              </DropdownToggle>
              <DropdownMenu right>{yearItems}</DropdownMenu>
            </Dropdown>
          </div>
          <div className="calendar-month">
            <Dropdown
              isOpen={this.state.monthDropDownOpen}
              toggle={this.toggleMonth}
            >
              <DropdownToggle
                tag="span"
                onClick={this.toggleMonth}
                data-toggle="dropdown"
                aria-expanded={this.state.monthDropDownOpen}
              >
                <h4>
                  {MONTHS_LONG[this.props.selectedMonth]}{" "}
                  {!this.state.monthDropDownOpen ? (
                    <span><FeatherIcon icon="chevron-down"/></span>
                  ) : (
                    <span><FeatherIcon icon="chevron-up"/></span> 
                  )}
                </h4>
              </DropdownToggle>
              <DropdownMenu right>{monthItems}</DropdownMenu>
            </Dropdown>
          </div>
        </Col>
      </Row>
    );
  };
}

CalendarUserPanel.propTypes = {
  registeredCalendars: PropTypes.array,
  selectedMonth: PropTypes.number,
  selectedYear: PropTypes.number,
  selectMonth: PropTypes.func,
  selectYear: PropTypes.func,
  user: PropTypes.object
};

export default CalendarUserPanel;
