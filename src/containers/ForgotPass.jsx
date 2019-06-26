/**
*   Description: Container component to reset password.
*   This must to be rendered inside a Modal as body modal
**/
import React from 'react';
// Redux and actions dependencies
import { connect } from 'react-redux';
import {checksapIdAction} from './../redux/actions/action.forgotPass';
// loading image
import loading_image from './../resources/img/blue_loading.gif'; // Tell Webpack this JS file uses this image
// Reactstrap components
import { Modal, ModalFooter, Button, Input, ModalHeader, ModalBody, Alert } from 'reactstrap';

class ForgotPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sapId : '',
      forgotStage: 1,
      error : false,
      errorMsj : '',
      userObj : {}
    };
  }
  
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }
  
  setButtonText = () => {
    if ( this.state.forgotStage === 1)
      return "Send SapId "
    if ( this.state.forgotStage === 2)
      return "Send Aswers "
    if ( this.state.forgotStage === 3)
      return "Change Password "
  }
  
  handleSubmit = async () => {
    if ( this.state.forgotStage === 1)
      return await this.SendSapID();
    if ( this.state.forgotStage === 2)
      return await this.SendSecurityQuestions();
    if ( this.state.forgotStage === 3)
      return await this.SendNewPassword();
  }
  
  SendSapID = async () => {
    await console.log(this.props.forgotObj)
    await console.log("si entro al SendSapID")
    const response = await this.props.checksapIdAction( await this.state.sapId);
    await console.log("SUSCCEESS", response)
    await console.log(this.props.forgotObj)
    if(this.props.forgotObj.status === 'success'){
      this.setState({
        userObj : this.props.forgotObj.response,
        forgotStage:2,
        error: false
      })
    }
    if(this.props.forgotObj.status === 'error'){
      this.setState({
        error: true,
        errorMsj : this.props.forgotObj.error
      })
    }
}
  
  forgotStage = async () => {
    
  }
  
  SendNewPassword = async () => {
    
  }
  
  
  
  render() {
    const stageBtnText = this.setButtonText();
    const errorAlert = (
      <Alert color="danger">
        {this.state.errorMsj}
      </Alert>  
    )
    const loadingImg = (<center><img src={loading_image} alt="loading..." /></center>);
    const printStage1 = (
      <div>
        <p>
          <b>SapId</b>
        </p>
        <Input name="sapId" id="inputSapId" 
          placeholder="Enter SapId here!" onChange={evt=>{this.handleChange(evt)}}
        />
        {this.state.error ? errorAlert : null}
      </div>
    );
    
    
    return (
      <Modal isOpen={this.props.isOpen} fade={false} toggle={()=>{this.props.toggleFun()}}>
        <ModalHeader toggle={()=>{this.props.toggleFun()}}>Reset your password</ModalHeader>
        <ModalBody>
          <h1>
            Forgot Password?
          </h1>
          <p>
            No problem! Enter your SapId you use to sign in. Next aswer your security questions.
          </p>
          {this.props.forgotObj.status !== 'loading' ? null : loadingImg}
          {this.state.forgotStage === 1 && this.props.forgotObj.status !== 'loading'? printStage1 : null}
          {this.state.forgotStage === 2 && this.props.forgotObj.status !== 'loading'? printStage1 : null}
          {this.state.forgotStage === 3 && this.props.forgotObj.status !== 'loading'? printStage1 : null}
          <center>
            <br />
            <Button color="secondary" size="md" block onClick={()=>{this.handleSubmit()}}>
              {stageBtnText}
            </Button>{' '}
            <br />
            <Button color="link" size="md" block onClick={()=>{this.props.toggleFun()}}>Cancel</Button>
          </center>
        </ModalBody>
        <ModalFooter>
          <p>
            <b>Need help?</b> If you are not longer using this SapId, please contact your manager.
          </p>
        </ModalFooter>
      </Modal>
    );
  }

}
function mapStateToProps(state) {
    return {
      forgotObj: state.forgotPassReducer
    };
}

const mapDispatchToProps = ({
    checksapIdAction,
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);