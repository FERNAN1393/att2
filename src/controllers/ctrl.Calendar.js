/**
*   Description: Controller file, will provide ABC DB methods, only for Calendar purpouses
**/
import * as firebase from "firebase";
import {CALENDAR_COLLECTION} from "../constants/Collections.js"

/*  Description: function will save Shift Month calendar
 *  input: month(obj)
 *  output: true/err
 */
export function CreateCalendar (month) {
  console.log(month);
  const db = firebase.firestore();
  const fraterCalendar = db.collection(CALENDAR_COLLECTION);
  return fraterCalendar.doc(month.sapId + "|"+ month.month).set({
    month
  }).then(function() {
    return true;
  }).catch(err =>{
    throw err;
  });
}

/*  Description: 
 *  input: Str key(SapId|month), int day
 *  output: 
 */
export function SelectDayCode (key, day) {
  const db = firebase.firestore();
  const fraterCalendar = db.collection(CALENDAR_COLLECTION);
  return fraterCalendar.doc(key).get()
  .then(function(month) {
    
    //Refactorizar esta funcion. Debe retornar codigo con el que fue marcado el dia pasado como parametro.
    
  }).catch(err =>{
    throw err;
  });
}

/*  Description: Method will provide all months stores for sapId
 *  input: sapId String
 *  output: month(obj array)
 */
export function SelectCalendarsBySapId (sapId) {
  const db = firebase.firestore();
  const fraterCalendar = db.collection(CALENDAR_COLLECTION);
  return fraterCalendar.where("sapId","==",sapId).get().then(function(month) {
    let aMonth = [];
    if(month !== undefined && month.docs.length > 0)
      month.forEach((doc)=>{
        aMonth.push(doc.data());  
      });
        
    return aMonth;
  }).catch(err =>{
      throw err;
  });
}



