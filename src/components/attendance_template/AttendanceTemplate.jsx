/**
 * Template that is seen in all views, and is used as navigation component for
 * current user.
 */
//React libraries
import React, { Component } from 'react';
import { NavLink as Link, Route } from 'react-router-dom';
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
//Attendance CSS files
import '../../resources/css/attendance_template/attendanceTemplate.css';

class AttendanceTemplate extends Component {
  
  constructor(props){
    super(props); 
    
    this.state = {
      user: this.props.user,
      selectedSidebarOption: ''
    };
  }


  componentWillMount = () => {
    //console.log(this.props.user);
  }
  
  handleLogOut = () => {
    this.setState({
      user: null,
      selectedSidebarOption: ''
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
            </Nav>
          </Navbar>
          <div>
            <Nav vertical className="col-md-2 bg-light attendance-template-sidebar">
              {this.props.user && this.props.user.role === "1" ? 
                <React.Fragment>
                  <NavItem>
                    <NavLink 
                      tag={Link} 
                      to="/upload"
                    >
                      <span><FeatherIcon icon="upload-cloud"/></span> 
                      Upload File
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink 
                      tag={Link} 
                      to="/finances" 
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
                  to="/calendar" 
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
                      to="/holidays"
                    >
                      <span><FeatherIcon icon="bookmark"/></span> 
                      Holidays
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink 
                      tag={Link} 
                      to="/employees"
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
                  to="/profile" 
                  name="profile-link"
                >
                  <span><FeatherIcon icon="settings"/></span> 
                  Edit Profile
                </NavLink>
              </NavItem>
            </Nav>
            <main className="col-md-10">
              <Route 
                {...this.props} component={this.props.component}
              />
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