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
      question1 : '',
      question2 : '',
      sec1 : '',
      sec2 : '',
      resp1: '',
      resp2: '',
    };
  }
  
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }
  
  toggle = () => {
    this.setState({
      forgotStage : 1,
      error : false,
      userObj : {}
    });
    this.props.toggleFun();
  }
  
  setButtonText = () => {
    if ( this.state.forgotStage === 1)
      return "Send SapId ";
    if ( this.state.forgotStage === 2)
      return "Send Aswers ";
    if ( this.state.forgotStage === 3)
      return "Change Password ";
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
    const sapId = await this.state.sapId;
    if ( sapId.length !== 8){
      this.setState({
        error: true,
        errorMsj : "SapId length must be 8 digit long"
      });
      return false;
    }
    await this.props.checksapIdAction( sapId );
    await console.log(this.props.forgotObj);
    if(this.props.forgotObj.status === 'success'){
      const obj = this.props.forgotObj.response;
      console.log("OBJ!!!!",obj)
      this.setState({
        question1 : obj.secureQuestions[0],
        question2 : obj.secureQuestions[1],
        resp1 :obj.secureAnswers[0],
        resp2 : obj.secureAnswers[1],
        forgotStage:2,
        error: false
      });
      console.log("ESTATE",this.state)
    }
    if(this.props.forgotObj.status === 'error'){
      this.setState({
        error: true,
        errorMsj : this.props.forgotObj.error
      });
    }
}
  
  SendSecurityQuestions = async () => {
    const res1 = this.state.resp1;
    const res2 = this.state.resp2;
    const ans1 = this.state.sec1;
    const ans2 = this.state.sec2;
    if(res1 === ans1 && res2 === ans2)
      console.log("SIMONNNNNNNNNNNNNN")
    return false
  }
  
  SendNewPassword = async () => {
    
  }
  
  
  
  render() {
    const stageBtnText = this.setButtonText();
    const errorAlert = (
      <Alert color="danger">
        {this.state.errorMsj}
      </Alert>  
    );
    const loadingImg = (<center><img src={loading_image} alt="loading..." /></center>);
    
    const printStage1 = (
      <div>
        <p>
          <b>SapId</b>
        </p>
        <Input name="sapId" id="inputSapId"  required
          placeholder="Enter SapId here!" onChange={evt=>{this.handleChange(evt)}}
        />
        {this.state.error ? errorAlert : null}
      </div>
    );
    const printStage2 = (
      <div>
        <p>
          <b>Security questions...</b>
        </p>
        <p>
          {this.state.forgotStage === 2 ? this.state.question1: null}
        </p>
        <Input name="sec1" id="inputSapId" required
          placeholder="Enter first answer here!" onChange={evt=>{this.handleChange(evt)}}
        />
        <p>
          {this.state.forgotStage === 2 ? this.state.question2 : null}
        </p>
        <Input name="sec2" id="inputSapId" required
          placeholder="Enter second answer here!" onChange={evt=>{this.handleChange(evt)}}
        />
        {this.state.error ? errorAlert : null}
      </div>
    );
    
    return (
      <Modal isOpen={this.props.isOpen} fade={false} toggle={()=>{this.toggle()}}>
        <ModalHeader toggle={()=>{this.toggle()}}>Reset your password</ModalHeader>
        <ModalBody>
          <h1>
            Forgot Password?
          </h1>
          <p>
            No problem! Enter your SapId you use to sign in. Next aswer your security questions.
          </p>
          {this.props.forgotObj.status !== 'loading' ? null : loadingImg}
          {this.state.forgotStage === 1 && this.props.forgotObj.status !== 'loading'? printStage1 : null}
          {this.state.forgotStage === 2 && this.props.forgotObj.status !== 'loading'? printStage2 : null}
          {this.state.forgotStage === 3 && this.props.forgotObj.status !== 'loading'? printStage1 : null}
          <center>
            <br />
            <Button color="secondary" size="md" block onClick={()=>{this.handleSubmit()}}>
              {stageBtnText}
            </Button>{' '}
            <br />
            <Button color="link" size="md" block onClick={()=>{this.toggle()}}>Cancel</Button>
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