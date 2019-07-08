/**
*   Description: Main app Container. Routes for app.
**/
import React from 'react';
import * as firebase from "firebase";
import { Route, Switch, Redirect } from 'react-router-dom';
//import Admin from "firebase-admin";
import { FirebaseCon } from "./constants/Collections";
import { SignInForm, Employees } from './containers';
import  CreateAccount  from './containers/CreateAccount';
import { connect } from 'react-redux';
import AttendanceTemplate from './components/attendance_template/AttendanceTemplate';
import Calendar from './containers/calendar/Calendar';
import Holiday from './containers/holiday/Holiday';

const mapStateToProps = ({user}) => ({user});

class _App extends React.Component{
  constructor(props) {
    super(props); 
    firebase.initializeApp(FirebaseCon);
  }
  
  render = () => {
    const { user: loggedUser } = this.props; 
    return (
      <div className="App">
        <div className="App__Form" >
          <Switch >
       
            <Route path="/CreateAccount" render={(props) => <CreateAccount {...props} data={this.state} />}  />  
            {!loggedUser && <Route path='/login' component={SignInForm}  /> }
            {!loggedUser && <Redirect to='/login' /> }
            
            <Redirect exact from="/login" to="/" /> 
              
            <AttendanceTemplate user={loggedUser}>
              <Route 
                exact 
                path="/calendar" 
                component={Calendar}
              />
              <Route 
                exact 
                path="/holidays" 
                component={Holiday}
              />
            <Route 
                exact 
                path="/employees" 
                component={Employees}
              />
            </AttendanceTemplate>
         
          </Switch>
        </div>
      </div>
    );
  }
}
export const App = connect(mapStateToProps)(_App);
