import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { signInUser } from '../redux/actions/action.signIn';
import { Error } from '../components';


const mapDispatchToProps = (dispatch) => bindActionCreators({ signInUser}, dispatch);
const mapStateToProps = (state, props) => (state);
const styles ={
    none: { display:"none"},
    noPadding :{ paddingTop:"2%"}    
}

class _SignInForm extends Component {

    state ={
      email:'',
      psw:'',
        redirect: false,
        user: {},
        modal: false,
        modalAppear : false
    }
    
    toggle =()=>  this.setState({modal: !this.state.modal });
    handleChange =({target: {name, value }})=> this.setState({[name]: value});
    
    handleSubmit =(e)=> {
      e.preventDefault();
      const { email, psw } = this.state;
      
      if(!email || !psw ){
        this.setState ({
          error: true,
         errorDescription: "UserName or Passwords cannot be empty"
        }); 
        return;
      }
      
     const credentials = { email , psw };
     const { success, errorMessage } = this.props.signInUser(credentials);
      if(success)
        this.props.history.push('/'); //redirect to aplication home 
       else
        this.setState ({ errorDescription: errorMessage }); 
    }
  
    render() {
    const { errorDescription, modal, email, psw } =this.state;

        return (
        <div>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Forgot Password</ModalHeader>
          <ModalBody>
          <h2>olvidaste tu contrase;a</h2>
           {/* <ForgotPassword Fun={this.toggle} />*/}
          </ModalBody >
        </Modal>
            <div className="FormTitle">
                <NavLink  to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link" style={styles.noPadding}>Sign In.</NavLink>
            </div>
            <form className="FormFields">
            <div className="FormField">
            <br/>
            <br/>
            <br/>
                <label className="FormField__Label" htmlFor="name">Email</label>
                <input type="name" id="name" className="FormField__Input" placeholder="Enter your name" name="email" value={email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="psw" value={psw} onChange={this.handleChange} />
                <br/>
                <br/>
                <Link to ="/CreateAccount">Don't you have an account? Create one.</Link>
                <br/>
                <a href="#" onClick={this.toggle}>Forgot password?</a>
              </div>
              <div className="FormField">
              <button className="FormField__Button mr-20 col-sm-5" onClick={this.handleSubmit}>Sign In</button>
              </div>
              {errorDescription && <Error mensaje ={errorDescription}/>}
            </form>
          </div>
        );
    }
}

export const SignInForm = connect(mapStateToProps, mapDispatchToProps)(_SignInForm);