/**
*   Description: Controller file, will autorize users to loggin, only for Login purpose  
**/
import * as firebase from "firebase";
import {USER_COLLECTION} from "../constants/Collections.js"
//  SingIn function controller
//  input:  email, password
//  output: User(Obj)
export function SignIn (email, pass) {
  const db = firebase.firestore();
  const fraterUsers = db.collection(USER_COLLECTION);
  return fraterUsers.where("email","==",email).where("password","==",pass).get().then(function(user) {
    debugger; 
    let userLogged = null;
    if(user !== undefined && user.docs.length > 0){
        userLogged = {
          name:  user.docs[0].data().employeeName,
          sapId: user.docs[0].data().sapId,
          role: user.docs[0].data().role
        }
      }
    return userLogged;
  }).catch(err =>{
      throw err;
  });
}