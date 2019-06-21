/**
*   Description: Main app Container. Routes for app.
**/

import React from 'react';
import * as firebase from "firebase";
import { Route, Switch } from 'react-router-dom';
import { FirebaseCon } from "./constants/Collections";
import { SignInForm } from './containers';

class App extends React.Component{
   constructor(props) {
        super(props); 
        firebase.initializeApp(FirebaseCon);
        
        
    }
    /*Funcion demo de como usar async con firebase
    Login = async ()=>{
      const res = await SignIn("javier", "123");
      alert (res.name);
    }
    */
  
  render(){
    return (
        <div className="App">
          <div className="App__Form" >
          <Switch>
            <Route exact path="/" render={(props) => <SignInForm {...props}/>}  />
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
