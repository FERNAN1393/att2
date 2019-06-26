/**
*   Description: Controller file, will provide ABC methods for Attendance users  
**/
import * as firebase from "firebase";
import {USER_COLLECTION, SHIFT_USER_REMOVED, SHIFT_USER_ACTIVE} from "../constants/Collections.js"


/* 
 * Description: This method will insert/update Attendance users
 * input: user (obj) 
 * output: true/err 
 */
export function CreateAttUser (user) {
  const db = firebase.firestore();
  const fraterUsers = db.collection(USER_COLLECTION);
  return fraterUsers.doc(user.sapId).set({
    user
  }).then(function(user) {
    return true;
  }).catch(err =>{
    throw err;
  });
}

/* 
 * Description: This method will select all active users
 * input;
 * output: AttUser (Array) 
 */
export function ExtractAllUsers () {
  const db = firebase.firestore();
  const fraterUsers = db.collection(USER_COLLECTION);
  return fraterUsers.where("status","==",SHIFT_USER_ACTIVE).get().then(function(users) {
    let sUser = [];
      users.forEach((doc)=>{
        sUser.push(doc.data());  
      });
    return sUser;
  }).catch(err =>{
      throw err;
  });
}

/* 
 * Description: This method will select users complete information using SapId
 * input; sapId - String
 * output: AttUser (obj) 
 */
export function ExtractUserBySapId (sapId) {
  const db = firebase.firestore();
  const fraterUsers = db.collection(USER_COLLECTION);
  return fraterUsers.where("user.sapId","==",sapId).get().then(function(user) {
    let sUser = null;
    if(user !== undefined && user.docs.length > 0)
        sUser = user.docs[0].data();
    return sUser;
  }).catch(err =>{
      throw err;
  });
}

/* 
 * Description: This method will select user information using email
 * input; email - String
 * output: AttUser (obj) 
 */
export function ExtractUserByEmail (email) {
  const db = firebase.firestore();
  const fraterUsers = db.collection(USER_COLLECTION);
  return fraterUsers.where("email","==",email).get().then(function(user) {
    let sUser = null;
    if(user !== undefined && user.docs.length > 0)
        sUser = user.docs[0].data();
    return sUser;
  }).catch(err =>{
      throw err;
  });
}

/* 
 * Description: This method will select users complete information using BatchNumber
 * input; batchNumber - String
 * output: AttUser (obj) 
 */
export function ExtractUserByBatchNumber (batchNumber) {
  const db = firebase.firestore();
  const fraterUsers = db.collection(USER_COLLECTION);
  return fraterUsers.where("batchNumber","==",batchNumber).get().then(function(user) {
    let sUser = null;
    if(user !== undefined && user.docs.length > 0)
        sUser = user.docs[0].data();
    return sUser;
  }).catch(err =>{
      throw err;
  });
}

/* 
 * Description: This method will select SapId using BatchNumber
 * input; batchNumber - String
 * output: SapId (Str) 
 */
export function ExtractSapIdByBatchNumber (batchNumber) {
  const db = firebase.firestore();
  const fraterUsers = db.collection(USER_COLLECTION);
  return fraterUsers.where("batchNumber","==",batchNumber).get().then(function(user) {
    let sUser = null;
    if(user !== undefined && user.docs.length > 0)
        sUser = user.docs[0].data();
    return sUser.sapId;
  }).catch(err =>{
      throw err;
  });
}


/*
 * Description: This method will delete Attendance Users
 * input: sapId - String
 * output: true/err
 */
export async function DeleteShiftUser (sapId){
  const db = firebase.firestore();
  const fraterUsers = db.collection(USER_COLLECTION);
  try{
    const storedUser = await ExtractUserBySapId(sapId);   
    if(storedUser !== null) {
      storedUser.status = SHIFT_USER_REMOVED
      return fraterUsers.doc(sapId).set({
        storedUser     
      }).then(function(user) {
        return true;
      }).catch(err =>{
        throw err;
      }); 
    }
  }catch(ex){
    throw ex;    
  }
}

/*
 * Description: This method will update user role
 * input: sapId - String, role string
 * output: true/err
 */
export async function UpdateUserRole (sapId, role){
  const db = firebase.firestore();
  const fraterUsers = db.collection(USER_COLLECTION);
  try{
    const storedUser = await ExtractUserBySapId(sapId);   
    if(storedUser !== null) {
      storedUser.role = role
      return fraterUsers.doc(sapId).set({
        storedUser     
      }).then(function(user) {
        return true;
      }).catch(err =>{
        throw err;
      }); 
    }
  }catch(ex){
    throw ex;    
  }
}