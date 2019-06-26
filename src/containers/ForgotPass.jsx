/**
*   Description: Container component to reset password.
*   This must to be rendered inside a Modal as body modal
**/
import React from 'react';
// Redux and actions dependencies
import { connect } from 'react-redux';
import {checksapIdAction, updateUser} from './../redux/actions/action.forgotPass';
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
      pass1 : '',
      pass2 : '',
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
      pass1 : '',
      pass2 : '',
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
    if(this.props.forgotObj.status === 'success'){
      const obj = this.props.forgotObj.response;
      this.setState({
        question1 : obj.secureQuestions[0],
        question2 : obj.secureQuestions[1],
        resp1 :obj.secureAnswers[0],
        resp2 : obj.secureAnswers[1],
        forgotStage:2,
        error: false
      });
    }
    if(this.props.forgotObj.status === 'error'){
      this.setState({
        error: true,
        errorMsj : this.props.forgotObj.error
      });
    }
}
  
  SendSecurityQuestions = () => {
    const res1 = this.state.resp1;
    const res2 = this.state.resp2;
    const sec1 = this.state.sec1;
    const sec2 = this.state.sec2;
    if(res1 === sec1 && res2 === sec2){
      this.setState({
        forgotStage : 3,
        error: false
      });
    }else{
      this.setState({
        error: true,
        errorMsj : "Wrong aswers, try again." 
      });
    }
  }
  
  SendNewPassword = async () => {
    const pass1 = this.state.pass1;
    const pass2 = this.state.pass2;
    // if length is less than 6 set error
    if(pass1.length < 6 || pass2.length < 6){
      this.setState({
        error: true,
        errorMsj : "Password length must be at least 6 digit long." 
      });
      return false;
    }
    if(pass1 === pass2){
      // change password
      const newUser = await this.props.forgotObj.response;
      newUser.password = pass1;
      await this.props.updateUser(newUser);
      this.setState({
        error: false,
        forgotStage : 4
      });
    }else{
      // send error
      this.setState({
        error: true,
        errorMsj : "Passwords not match." 
      });
    }
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
        <Input name="sapId"
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
        <Input name="sec1"
          placeholder="Enter first answer here!" onChange={evt=>{this.handleChange(evt)}}
        />
        <p>
          {this.state.forgotStage === 2 ? this.state.question2 : null}
        </p>
        <Input name="sec2"
          placeholder="Enter second answer here!" onChange={evt=>{this.handleChange(evt)}}
        />
        {this.state.error ? errorAlert : null}
      </div>
    );
    const printStage3 = (
      <div>
        <p>
          <b>Type new password...</b>
        </p>
        <p>
          Password
        </p>
        <Input name="pass1" type="password" 
          placeholder="Enter first password here!" onChange={evt=>{this.handleChange(evt)}}
        />
        <p>
          Confirm password
        </p>
        <Input name="pass2" type="password"
          placeholder="Enter second password here!" onChange={evt=>{this.handleChange(evt)}}
        />
        {this.state.error ? errorAlert : null}
      </div>
    );
    const printStage4 = (
      <Alert color="success">
        Your password has been changed succesfully!
      </Alert>  
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
          {this.state.forgotStage === 3 && this.props.forgotObj.status !== 'loading'? printStage3 : null}
          {this.state.forgotStage === 4 && this.props.forgotObj.status !== 'loading'? printStage4 : null}
          <center>
            <br />
            {
              this.state.forgotStage < 4?
                <Button color="secondary" size="md" block onClick={()=>{this.handleSubmit()}}>
                  {stageBtnText}
                </Button>
              : 
                null
            }
            <Button color="link" size="md" block onClick={()=>{this.toggle()}}>Close</Button>
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
    updateUser
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);