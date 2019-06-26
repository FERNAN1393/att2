/**
 * Template that is seen in all views, and is used as navigation component for
 * current user.
 */
//React libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
//import { Redirect } from 'react-router';
import FeatherIcon from 'feather-icons-react';
//CSS files
import '../../resources/css/attendance_template/attendanceTemplate.css';

class AttendanceTemplate extends Component {
  
  constructor(props){
    super(props); 
    
    this.state = {
      user: this.props.user,
      selectedSidebarOption: ''
    };
  }

  componentDidMount = () => {
    if (!this.props.user) {
      //Redirect
      console.log('User has to log in');
    }
    this.setState({
      selectedSidebarOption: (this.props.user.role === '1') ? 
        'upload-link' : 'calendar-link'
    });
  }
  
  handleLogOut = () => {
    this.setState({
      user: null,
      selectedSidebarOption: ''
    });
  }

  selectSidebarOption = event => {
    event.preventDefault();    
    const name = event.target.name;
    this.setState({
      selectedSidebarOption: name
    });
  }
      
  render = () => {
    const employeeName = (this.props.user.role === "1") ? 
      `${this.props.user.employeeName} (Admin)` : 
      this.props.user.employeeName;
    
    return (
        <div className="attendance-template">
          <Navbar className="shadow p-0 attendance-template-navbar" color="dark" dark expand="lg">
            <NavbarBrand className="col-sm-3 col-md-2 mr-0" href="#">Attendance</NavbarBrand>
            <Nav className="ml-auto attendance-template-navbar-menu" navbar>
              <NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav caret>
                    <span style={{color: '#fff'}}>{employeeName}</span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink 
                        tag={Link} 
                        to="/" 
                        style={{color: '#000'}} 
                        onClick={this.handleLogOut}
                      >
                        Sign out
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </Nav>
          </Navbar>
          <div>
            <Nav vertical className="col-md-2 bg-light attendance-template-sidebar">
              {this.props.user && this.props.user.role === "1" ? 
                <React.Fragment>
                  <NavItem>
                    <NavLink 
                      tag={Link} 
                      to="/" 
                      name="upload-link"
                      onClick={this.selectSidebarOption}
                      className={this.state.selectedSidebarOption === 'upload-link' ? 'active' : ''}
                    >
                      <span><FeatherIcon icon="upload-cloud"/></span> 
                      Upload File
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink 
                      tag={Link} 
                      to="/" 
                      name="finance-link"
                      onClick={this.selectSidebarOption}
                      className={this.state.selectedSidebarOption === 'finance-link' ? 'active' : ''}
                    >
                      <span><FeatherIcon icon="download-cloud"/></span> 
                      Finance Files
                    </NavLink>
                  </NavItem>
                </React.Fragment>
                : 
                <React.Fragment />
              }
              <NavItem>
                <NavLink 
                  tag={Link} 
                  to="/" 
                  name="calendar-link"
                  onClick={this.selectSidebarOption}
                  className={this.state.selectedSidebarOption === 'calendar-link' ? 'active' : ''}
                >
                  <span><FeatherIcon icon="calendar"/></span> 
                  Shift Calendar
                </NavLink>
              </NavItem>
              {this.props.user && this.props.user.role === "1" ? 
                <React.Fragment>
                  <NavItem>
                    <NavLink 
                      tag={Link} 
                      to="/" 
                      name="bookmark-link"
                      onClick={this.selectSidebarOption}
                      className={this.state.selectedSidebarOption === 'bookmark-link' ? 'active' : ''}
                    >
                      <span><FeatherIcon icon="bookmark"/></span> 
                      Holidays
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink 
                      tag={Link} 
                      to="/" 
                      name="employees-link"
                      onClick={this.selectSidebarOption}
                      className={this.state.selectedSidebarOption === 'employees-link' ? 'active' : ''}
                    >
                      <span><FeatherIcon icon="users"/></span> 
                      Employees
                    </NavLink>
                  </NavItem>
                </React.Fragment>
                : 
                <React.Fragment />
              }
              <NavItem className="fixed-bottom">
                <NavLink 
                  tag={Link} 
                  to="/" 
                  name="profile-link"
                  onClick={this.selectSidebarOption}
                  className={this.state.selectedSidebarOption === 'profile-link' ? 'active' : ''}
                >
                  <span><FeatherIcon icon="settings"/></span> 
                  Edit Profile
                </NavLink>
              </NavItem>
            </Nav>
            <main className="col-md-10">
              <h1>A title</h1>
              <p>This is some long text, prepare for it; jhgsadhfkjsagfdhs dhdhfg sahdghg djh ah fdjhsa bfdha bfdhbs jfb dskjfbsakj bfas fhs vdfas dha jha dfhabd fkhdsa fha fdha jha dkjha vjha dh afdha fhavdsfa vfjhbadbhfd a.</p>
            </main>
          </div>
        </div>
      );
  }
}

AttendanceTemplate.propTypes = {
  user: PropTypes.object
};

export default AttendanceTemplate;