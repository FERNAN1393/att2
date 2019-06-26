/**
*   Description: Main app Container. Routes for app.
**/
import React from 'react';
import * as firebase from "firebase";
import { BrowserRouter as Router, Route} from 'react-router-dom';
//import Admin from "firebase-admin";
import { FirebaseCon } from "./constants/Collections";

//  ----------- TBDeleted -------------------
import ForgotPass from './containers/ForgotPass';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//  -----------------------------------------

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forgotPassModal: false
    };
  }
  
  toggleForgotModal = () => {
    this.setState(prevState => ({
      forgotPassModal: !prevState.forgotPassModal
    }));
  }
  
  render() {
    return (
      <div>
        Learn React
        
        <br />
        <Button color="danger" onClick={()=>{this.toggleForgotModal()}}>toggle forgot modal</Button>
        <Modal isOpen={this.state.forgotPassModal} fade={false} toggle={this.toggleForgotModal} >
          <ForgotPass toggleFun={this.toggleForgotModal}/>
          <ModalFooter>
          <p>
            <b>Need help?</b> If you are not longer using this SapId, please contact your manager.
          </p>
          </ModalFooter>
        </Modal>
        
        <br />
        
      </div>
    )
    
  };

    /*Funcion demo de como usar async con firebase
    Login = async ()=>{
      const res = await SignIn("javier", "123");
      alert (res.name);
    }
    
    componentDidMount(){
      this.Login();
    }*/
  

}

export default App;
