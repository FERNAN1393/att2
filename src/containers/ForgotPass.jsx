/**
*   Description: Container component to reset password.
*   This must to be rendered inside a Modal as body modal
**/
import React from 'react';
// Redux and actions dependencies
import { connect } from 'react-redux';
import {forgotPass} from './../redux/actions/action.forgotPass';
// loading image
import loading_image from './../resources/img/blue_loading.gif'; // Tell Webpack this JS file uses this image
// Reactstrap components
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class ForgotPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sapId: '12345678'
    };
  }
  
  handleChange = event => {
    this.setState({sapId: event.target.value});
  }
  
  handleSubmit = event => {
  alert('A name was submitted: ' + this.state.sapId);
  event.preventDefault();
  }
  
  toggle = () => {
    console.log("first print")
    console.log(this.props.forgotObj)
    console.log("after hitting accion")
    console.log(this.props.forgotPass(this.state).payload)
    console.log("new state")
    console.log(this.props.forgotObj)
  }
  
  render() {
    return (
      <div>
          <ModalHeader toggle={this.props.toggle}>Reset your password</ModalHeader>
          <ModalBody>
            <h1>
              Forgot Password?
            </h1>
            <p>
              No problem! Enter your SapId ypu use to sign in. Next aswers your security questions.
            </p>
            <h5>
              <b>SapId</b>
            </h5>
            
          </ModalBody>
          <ModalFooter>
            <Button color="secondary"  onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
      </div>
    );
  }

}
function mapStateToProps(state) {
    return {
      // passObj containt first SapId then questions
      forgotObj: state.forgotObj,
    };
}

const mapDispatchToProps = ({
    forgotPass,
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);