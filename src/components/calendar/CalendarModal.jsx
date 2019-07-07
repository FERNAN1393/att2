//React libraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
//Attendance constants
import { DAY_TYPE, MONTHS } from "../../constants/util";

class CalendarModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      selectedType: //DAY_TYPE[Object.keys(DAY_TYPE)[0]]
        this.props.dayType.symbol !== "" ? this.props.dayType : DAY_TYPE[Object.keys(DAY_TYPE)[0]] 
    };
  }

  mapDate = date => {
    if (date) {
      const { day, year, month } = date;
      let mappedDate = "";
      if (day) {
        mappedDate += `${day}/`;
      }
      if (month !== null) {
        mappedDate += `${MONTHS[month]}`;
      }
      mappedDate += `/`;
      if (year !== null) {
        mappedDate += `${year}`;
      }
      return mappedDate;
    }
    return "";
  }

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  selectType = key => {
    this.setState({
      selectedType: DAY_TYPE[key]
    });
  }

  render = () => {
    const detailsStyle = {
      borderLeft: "1px solid #343a40",
      color: "#343a40"
    };
    const props = this.props;
    const title = props.days.length === 1 ? this.mapDate({
          month: props.month,
          day: props.days[0],
          year: props.year
        }) : `Various days`;
    let isWeekendDay = true,
      weekDay;
    //Fill single numbers with 0 IMPORTANT
    const month = props.month + 1;
    for (let i = 0; i < props.days.length; i++) {
      weekDay = moment(
        `${props.days[i] <= 9 ? `0${props.days[i]}` : props.days[i]}/${month <= 9 ? `0${month}` : month}/${props.year}`, "DD/MM/YYYY"
      ).day();
      if (weekDay !== 0 && weekDay !== 6) {
        isWeekendDay = false;
        break;
      }
    }
    const filteredKeys = Object.keys(DAY_TYPE).filter(key => 
      isWeekendDay || DAY_TYPE[key] !== DAY_TYPE.MORNING_SHIFT
    );
    const dropDownItems = filteredKeys.map(key => {
      return (
        <DropdownItem key={key} onClick={k => this.selectType(key)}>
          {DAY_TYPE[key].name}
        </DropdownItem>
      );
    });
    return (
      <Modal
        isOpen={props.isOpen}
        toggle={props.toggle}
        className="calendar-modal"
        backdrop="static"
        size="lg"
      >
        <ModalHeader toggle={props.toggle}>{`Select Day Type for: ${title}`}</ModalHeader>
        <ModalBody>
          <Row>
            <Col xs="6">
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle caret>{this.state.selectedType.name}</DropdownToggle>
                <DropdownMenu>{dropDownItems}</DropdownMenu>
              </Dropdown>
            </Col>
            <Col xs="6" style={detailsStyle}>
              <Row>
                <Col>
                  <div className="calendar-modal-symbol">
                    <span>{this.state.selectedType.symbol}</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="calendar-modal-name">
                    <span>{this.state.selectedType.name}</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="calendar-modal-description">
                    <span>{this.state.selectedType.description}</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={dayType => props.accept(this.state.selectedType)}>
            Accept
          </Button>{" "}
          <Button color="danger" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

CalendarModal.propTypes = {
  accept: PropTypes.func,
  days: PropTypes.array,
  dayType: PropTypes.object,
  isOpen: PropTypes.bool,
  month: PropTypes.number,
  toggle: PropTypes.func,
  year: PropTypes.number
};

export default CalendarModal;
