/**
*   Description: Main app Container. Routes for app.
**/

import React from 'react';
import * as firebase from "firebase";
import { Route, Switch, Redirect } from 'react-router-dom';
//import Admin from "firebase-admin";
import { FirebaseCon } from "./constants/Collections";
import { SignInForm } from './containers';
import { connect } from 'react-redux';

import AttendanceTemplate from './components/attendance_template/AttendanceTemplate';


const mapStateToProps = ({user}) => ({user});

const admin = {
  projectName: 'Attendance ',
  projectCode: '001',
  reportingManager: '12345678',
  sapId: '99999999',
  batchNumber: '000',
  employeeName: 'Admin',
  email: 'admin@hcl.com',
  password: 'admin',
  role: '1',
  client: 'HCL',
  workLocation: 'Vista Acueducto',
  employeeStatus: 'Local-nativo',
  secureQuestions: [
    'What is your favorite movie?',
    'What is your pet’s name?'
  ],
  secureAnswers: [
    'attendance',
    'attendance'
  ],
  status: 'active'
};

class _App extends React.Component{
   constructor(props) {
        super(props); 
        firebase.initializeApp(FirebaseCon);
      
        this.state = {
          username: '',
          password: '',
          user: admin
        };
    }
  
  render = () => {
    const { user: loggedUser } = this.props; 
    return (
        <div className="App">
          <div className="App__Form" >
          <Switch >
       
          {!loggedUser &&  <Route path='/login' component={SignInForm}  /> }
          {!loggedUser && <Redirect to='/login' /> }
          
          <Redirect exact from='/login' to='/' /> 

          <Route render={(props) => (
          <Switch {...props}>
             <Route  exact  path="/" render={(props) => <AttendanceTemplate {...props} user={this.state.user} />} />
          </Switch>
          )}/> 
         
          </Switch> 
            <div className="Layout_Template">
            </div>
          </div>
        </div>
    );
  }
}

export const App = connect(mapStateToProps)(_App);
