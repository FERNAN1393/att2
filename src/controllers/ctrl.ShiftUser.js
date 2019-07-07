/**
*   Description: Controller file, will provide ABC methods for Attendance users  
**/
import * as firebase from "firebase";
import {
  USER_COLLECTION, 
  SHIFT_USER_REMOVED, 
  SHIFT_USER_ACTIVE
} from "../constants/Collections.js";

/* 
 * Description: This method will insert Attendance users
 * input: user (obj) 
 * output: true/err 
 */
export const CreateAttUser = async(user) => {
  try{
    if (user.sapId === "")
      throw new Error("Please fill all data fields");
    const db = firebase.firestore();
    const attUsers = db.collection(USER_COLLECTION);
    const alreadyExist = await attUsers.where("sapId","==",user.sapId).get();
    if(alreadyExist !== undefined && alreadyExist.docs.length > 0)
        throw new Error("User already Exist");
    return await attUsers.doc(user.sapId).set(user);
  }catch(error){
    throw error;
  }
};

/* 
 * Description: This method will update Attendance users
 * input: user (obj) 
 * output: true/err 
 */
export const UpdateUser = async(user) => {
  try{
    const db = firebase.firestore();
    const attUsers = db.collection(USER_COLLECTION);
    await attUsers.doc(user.sapId).set(user);
    return true;
  }catch(error){
    throw error;    
  }
};

/* 
 * Description: This method will select all active users
 * input;
 * output: AttUser (Array) 
 */
export function ExtractAllUsers () {
  const db = firebase.firestore();
  const attUsers = db.collection(USER_COLLECTION);
  return attUsers.where("status","==",SHIFT_USER_ACTIVE).get().then(function(users) {
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
  return fraterUsers.where("sapId","==",sapId).get().then(function(user) {
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
  const attUsers = db.collection(USER_COLLECTION);
  return attUsers.where("email","==",email).get().then(function(user) {
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
  const attUsers = db.collection(USER_COLLECTION);
  return attUsers.where("batchNumber","==",batchNumber).get().then(function(user) {
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
  const attUsers = db.collection(USER_COLLECTION);
  return attUsers.where("batchNumber","==",batchNumber).get().then(function(user) {
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
  const attUsers = db.collection(USER_COLLECTION);
  try{
    const storedUser = await ExtractUserBySapId(sapId);   
    if(storedUser !== null) {
      storedUser.status = SHIFT_USER_REMOVED
      return attUsers.doc(sapId).set({
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
  const attUsers = db.collection(USER_COLLECTION);
  try{
    const storedUser = await ExtractUserBySapId(sapId);   
    if(storedUser !== null) {
      storedUser.role = role
      return attUsers.doc(sapId).set({
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