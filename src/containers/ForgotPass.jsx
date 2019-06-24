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
import { Button, Input, ModalHeader, ModalBody } from 'reactstrap';

class ForgotPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sapId: '12345678',
      stage: 1,
      
    };
  }
  
  printRedux = async () =>{
    await this.props.checksapIdAction(this.state.sapId);
    console.log(this.props.forgotObj)
  }
  
  handleChange = event => {
    this.setState({[event.name]: event.target.value});
  }
  
  handleSubmit = () => {
    this.printRedux();
  }
  
  
  setButtonText = () => {
    if ( this.state.stage === 1)
      return "Send SapId "
    if ( this.state.stage === 2)
      return "Send Aswers "
    if ( this.state.stage === 3)
      return "Change Password "
  }
  
  render() {
    const buttonText = this.setButtonText();
    return (
      <div>
          <ModalHeader toggle={this.props.toggle}>Reset your password</ModalHeader>
          <ModalBody>
            <h1>
              Forgot Password?
            </h1>
            <p>
              No problem! Enter your SapId you use to sign in. Next aswer your security questions.
            </p>
            <p>
              <b>SapId</b>
            </p>
            <Input name="sapId" id="inputSapId" placeholder="Enter SapId here!" onChange={evt=>{this.handleChange(evt)}}/>
            
            <center>
            <br />
              <Button color="secondary" size="md" block onClick={()=>{this.handleSubmit()}}>
                {buttonText}
              </Button>{' '}
            </center>
            
            <img src={loading_image} alt="loading..." />
            
            <center>
              <Button color="link" size="md" block onClick={()=>{this.props.toggleFun()}}>Cancel</Button>
            </center>
          </ModalBody>
      </div>
    );
  }

}
function mapStateToProps(state) {
    return {
      // forgotObj containt first SapId then questions
      forgotObj: state.forgotPassReducer
    };
}

const mapDispatchToProps = ({
    checksapIdAction,
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);