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
  const db = firebase.firestore();
  const fraterCalendar = db.collection(CALENDAR_COLLECTION);
  return fraterCalendar.doc(month.sapId + "|"+ month.month).set(month).then(function() {
    return true;
  }).catch(err =>{
    throw err;
  });
}

/*  Description: Day 0 equals to first day of month, 30th to 31. Will return Shift code of provided day.
 *  input: String key(SapId|month), int day
 *  output: String code
 */
export function SelectDayCode (key, day) {
  const db = firebase.firestore();
  const fraterCalendar = db.collection(CALENDAR_COLLECTION);
  return fraterCalendar.doc(key).get().then(function(month) {
    debugger;
    const daysArray = month._document.proto.fields.month.mapValue.fields.days.arrayValue.values;
    return daysArray[day - 1].mapValue.fields.value.stringValue;
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



