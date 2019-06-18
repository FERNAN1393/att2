/**
*   Description: Main app Container. Routes for app.
**/
import React from 'react';
import * as firebase from "firebase";
//import Admin from "firebase-admin";
import { FirebaseCon } from "./constants/Collections";

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
    
    componentDidMount(){
      this.Login();
    }*/
  
  render(){
    return (
    <div>
          Learn React
    </div>
    );
  }
}

export default App;
