/**
*   Description: Main app Container. Routes for app.
**/

import React from 'react';
import * as firebase from "firebase";
import { Route, Switch } from 'react-router-dom';
//import Admin from "firebase-admin";
import { FirebaseCon } from "./constants/Collections";
import { SignInForm } from './containers';

import AttendanceTemplate from './components/attendance_template/AttendanceTemplate';

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
const user = {
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

class App extends React.Component{
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
    return (
        <div className="App">
          <div className="App__Form" >
          <Switch>
            <Route  exact  path="/" render={(props) => <AttendanceTemplate {...props} user={this.state.user} />} />
            <Route exact path="/login" render={(props) => <SignInForm {...props}/>}  />    
          </Switch> 
            <div className="Layout_Template">
            </div>
          </div>
        </div>
    );
  }
}

export default App;
