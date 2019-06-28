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
