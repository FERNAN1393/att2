/**
*   Description: Controller file, will provide ABC methods for Holiday  
**/
import * as firebase from "firebase";
import {HOLIDAY_COLLECTION} from "../constants/Collections.js"


/* 
 * Description: This method will insert/update Holidays
 * input: holiday (obj) 
 * output: true/err 
 */
export function CreateShiftHoliday (holiday) {
  const db = firebase.firestore();
  const fraterHoliday = db.collection(HOLIDAY_COLLECTION);
  return fraterHoliday.doc(holiday.holidayDate.replace("/", "-")).set({
    holiday
  }).then(function() {
    return true;
  }).catch(err =>{
    throw err;
  });
}

/* 
 * Description: This method will select all holidays 
 * input; 
 * output: holidays (Array obj) 
 */
export function SelectAllHolidays() {
  const db = firebase.firestore();
  const fraterHoliday = db.collection(HOLIDAY_COLLECTION);
  return fraterHoliday.get().then(function(holidays) {
    let aHolidays = null;
    if(holidays !== undefined && holidays.docs.length > 0)
      holidays.forEach((doc)=>{
        aHolidays.push(doc.data());
      });
    return aHolidays;
  }).catch(err =>{
      throw err;
  });
}

/* 
 * Description: This method will select all holidays 
 * input; 
 * output: holidays (Array obj) 
 */
export function SelectHolidaysByDate() {
  const db = firebase.firestore();
  const fraterHoliday = db.collection(HOLIDAY_COLLECTION);
  return fraterHoliday.get().then(function(holidays) {
    let aHolidays = null;
    if(holidays !== undefined && holidays.docs.length > 0)
      holidays.forEach((doc)=>{
        aHolidays.push(doc.data());
      });
    return aHolidays;
  }).catch(err =>{
      throw err;
  });
}