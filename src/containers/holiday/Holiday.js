//React libraries
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Alert, Button, Card, Row, Col } from "reactstrap";
import DayPicker from 'react-day-picker';
//Atendance jsx files
import SingleHoliday from "../../components/holiday/SingleHoliday";
//Redux actions
import {getHolidays} from '../../redux/actions/action.getHolidays';
import {postHoliday} from '../../redux/actions/action.postHoliday';
import {deleteHoliday} from '../../redux/actions/action.deleteHoliday';

import 'react-day-picker/lib/style.css';

class Holiday extends Component {
    constructor(props){
        super(props)
        this.state ={
            disabled: false,
            selectedDay: null,
            selectedMonth: new Date().getMonth(),
            selectedYear: new Date().getFullYear(),
            holiday: "",
            holidayType: "",
            holidayDescription: "",
            holidayStatus: "",
            creationDate: "",
            userName: "",
            holidays: null,
            holidayDescriptions: null
        };
    }    
    
    componentWillMount = () => {
        this.getHolidays();
    }
    
    getHolidays = async () => {
        await this.props.getHolidays();
        const holidays = this.props.holidays;
        const tHolidays = [];
        let tMonth = "";
        let newMonth = {};
        for(let i = 0; i < holidays.length; i++) {
            const holiday = holidays[i];
            const holidayDayArr = holiday.holidayDate.split("/");
            const day = parseInt(holidayDayArr[1]);
            if( tMonth !== holidayDayArr[0] ) {
                tMonth = holidayDayArr[0];
                if(Object.keys(newMonth).length !== 0) {
                    tHolidays.push(newMonth);
                }
                newMonth = {
                    month: tMonth,
                    year: holiday.year,
                    days: { [day] : Array.of(holiday.holidayName) }
                };
            } else {
                newMonth.days = { ...newMonth.days, [day] : Array.of(holiday.holidayName)}
            }
        }
        tHolidays.push(newMonth);
        this.setState({
            holidays : tHolidays,
            holidayDescriptions: holidays
        });
    }
    
    handleDayClick = (day, { selected }) => {
        const holidaysDescription =  this.state.holidayDescriptions;
        this.setState({
            selectedDay: selected ? undefined : day
        });
        for(let i = 0; i < holidaysDescription.length; i++){
            const holidayDescription = holidaysDescription[i];
            const holidayDateArr = holidayDescription.holidayDate.split("/");
            let holidayDate = new Date(holidayDateArr[2], holidayDateArr[0], holidayDateArr[1]);
            if(day.getDate() === holidayDate.getDate() && 
                day.getMonth() === holidayDate.getMonth() && 
                day.getFullYear() === holidayDate.getFullYear()
            ) {
                const holidayCreatedAtArr = holidayDescription.createdAt.split('/');
                let createdByDate = new Date(holidayCreatedAtArr[2], holidayCreatedAtArr[0], holidayCreatedAtArr[1]);
                let status = holidayDescription.status;
                let actualDate = new Date();
                if (Date.parse(holidayDate) < Date.parse(actualDate)) {
                   status = "disable"; 
                   this.setState({
                       disabled: true
                   });
                } else {
                    this.setState({
                       disabled: false
                   });
                }  
                this.setState({
                    holiday: holidayDescription.holidayName,
                    holidayType: holidayDescription.holidayType,
                    holidayDescription: holidayDescription.holidayDescription,
                    holidayStatus: status,
                    creationDate: createdByDate.getDate() + "/" + (createdByDate.getMonth() + 1) + "/" + createdByDate.getFullYear(),
                    userName: holidayDescription.createdBy
                });
                return;
            }
        }
        this.setState({
            disabled: true,
            holiday: "",
            holidayType: "",
            holidayDescription: "",
            holidayStatus: "",
            creationDate: "",
            userName: ""
        });
    }
    
    handleMonthClick = month => {
        this.setState({
          selectedMonth: month.getMonth(),
          selectedYear: month.getFullYear()
        });
    }
    
    paintHolidays = (day, holidays) => {
        const date = day.getDate();
        const holidayStyle = { fontSize: '0.7em', textAlign: 'left' };
        const cellStyle = {
            height: 50,
            width: 60,
            position: 'relative',
         };
        const dateStyle = {
            position: 'absolute',
            color: 'lightgray',
            bottom: 0,
            right: 0,
            fontSize: 20,
        };
        return (
            <div style={cellStyle}>
              <div style={dateStyle}>{date}</div>
              {holidays && holidays[date] &&
                holidays[date].map((name, i) => (
                  <div key={i} style={holidayStyle}>
                    <span role="img">✈️</span> {name}
                  </div>
                ))}
            </div>
        );
    }
    
    getDaysOfMonth = months => {
        let days = {};
        if(months.length > 0){
            for(let i=0; i<months.length; i++) {
                if(months[i].month == this.state.selectedMonth && months[i].year == this.state.selectedYear) {
                    days = {
                        ...days,
                        ...months[i].days
                    }
                }
            }
        }else if(months.month == this.state.selectedMonth && months.year == this.state.selectedYear){
            days = months.days;
        }
        return days;
    }
    
    updateMonth = () => {
        this.getHolidays();
        this.setState({
            disabled: true,
            holiday: "",
            holidayType: "",
            holidayDescription: "",
            holidayStatus: "",
            creationDate: "",
            userName: ''
        });
    }    

    renderDay = day => {
        if (this.state.holidays !== null) {
            return this.paintHolidays(day, this.getDaysOfMonth(this.state.holidays));
        } 
        return this.paintHolidays(day);
    }
    
    handleDelete = async () => {
        const date = `${this.state.selectedDay.getMonth()}-${this.state.selectedDay.getDate()}-${this.state.selectedDay.getFullYear()}`;
        await this.props.deleteHoliday(date);
        if (this.props.status.code === 'ok') {
            this.updateMonth();
            alert("Deleted successfully!");
        }
    }
    
    addHoliday = holiday => {
        this.props.postHoliday(holiday);
        this.getHolidays();
    }

    render = () => {
        let min={
            minWidth:"360px"
        };
        
        return(
        <div style={{height: 'calc(90vh - 40px)'}}>
            <Row>
                <Col>
                    <h1 className="h2">Register holidays</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="3" style={min}>
                    <SingleHoliday 
                        addHoliday={this.addHoliday}
                        user={this.props.user} 
                    />
                </Col>
                <Col>
                    <Card body outline color="warning">
                        <Alert color="warning">
                            <h4 className="col-sm-offset-2">
                                Holiday Calendar
                            </h4>
                        </Alert>
                           <DayPicker
                              canChangeMonth={true}
                              className="Birthdays"
                              renderDay={this.renderDay}
                              selectedDays={this.state.selectedDay}
                              onMonthChange={this.handleMonthClick}
                              onDayClick={this.handleDayClick}
                            />
                        <Row>
                            <Col>
                                <label htmlFor="name"><b>Holiday: </b></label>
                                <input name="name" type="text" value={this.state.holiday} disabled/><br/>
                                <label htmlFor="status"><b>Holiday type:</b></label>
                                <input name="status" type="text" value={this.state.holidayType} disabled />
                            </Col>
                            <Col>
                                <label htmlFor="desc"><b>Holiday description: </b></label>
                                <input name="desc" type="text" value={this.state.holidayDescription} disabled/><br/>
                                <label htmlFor="status"><b>Status:</b></label>
                                <input name="status" type="text" value={this.state.holidayStatus} disabled />
                            </Col>
                              <Col>
                                <label htmlFor="savedAt"><b>Created: </b></label>
                                <input name="savedAt" type="text" value={this.state.creationDate} disabled/><br/>
                                <label htmlFor="user"><b>Created by:</b></label>
                                <input name="user" type="text" value={this.state.userName} disabled />
                            </Col>
                        </Row>
                        <Row>
                             <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <Button onClick={this.handleDelete} color="danger" id="btnDelete" className="col-sm-12" disabled={this.state.disabled}> Delete </Button>      
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
        );   
    }
}

const mapStateToProps = state => {
  const holidaysData = state.holidays;
  const holidays = holidaysData.holidays;
  return {
    holidays: holidays ? holidays : [],
    loading: holidaysData.loading,
    status: holidaysData.status,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    getHolidays,
    postHoliday,
    deleteHoliday
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Holiday);