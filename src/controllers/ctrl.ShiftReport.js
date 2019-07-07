/**
*   Description: Controller file, will provide ABC DB methods, only for Report purpouses
**/
import * as firebase from "firebase";
import {LATE_ARRIVAL_COLLECTION, ALLOWANCE_COLLECTION, REPORT_COLLECTION, NS_COLLECTION} from "../constants/Collections.js"

/*  Description: function will save lates arrivals
 *  input: lateArrival(obj)
 *  output: true/err
 */
export function CreateLateArrivals (lateArrival) {
  const db = firebase.firestore();
  const attLateArr = db.collection(LATE_ARRIVAL_COLLECTION);
  return attLateArr.doc().set({
    arrivalHour: lateArrival.arrivalHour,
    batchNumber: lateArrival.batchNumber,
    dayCalendar: lateArrival.dayCalendar,
    employeeName: lateArrival.employeeName,
    period: lateArrival.period,
    sapId: lateArrival.sapId
  }).then(function() {
    return true;
  }).catch(err =>{
    throw err;
  });
}

/*  Description: 
 *  input: Allowance obj
 *  output: true/err
 */
export function CreateAllowance (allowance) {
  const db = firebase.firestore();
  const attAllowance = db.collection(ALLOWANCE_COLLECTION);
  return attAllowance.doc().set(allowance).then(function() {
    return true;
  }).catch(err =>{
    throw err;
  });
}
