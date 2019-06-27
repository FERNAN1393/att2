
import { SignIn }  from '../../controllers/ctrl.SignInForm';
import { USER_LOGGED } from './../../constants/reduxActions';

/*
Params: User : { }
*/
export const signInUser = ({email, psw }) =>  async dispatch => {
    try {
        //const userLoggedInfo = user;
        const userLoggedInfo = await SignIn(email, psw);
        userLoggedInfo && dispatch({type: USER_LOGGED, user: userLoggedInfo });
        return {success:true,errorMessage:  !userLoggedInfo && 'User invalid, email or password is incorrect!'};
    }catch(e){
        console.log('Error');
        return {success:false, errorMessage: 'Verify your internet connection'};
    }

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