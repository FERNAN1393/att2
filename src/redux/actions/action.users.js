
import { SignIn }  from '../../controllers/ctrl.SignInForm';
import { USERS_FETCHED, USERS_UPDATED, USERS_DELETED  } from './../../constants/reduxActions';
const dataUsers= 
[
   {
      "projectName":"USAA EIS ACC SUPPORT",
      "projectCode":"C/176186",
      "reportingManager":"51677622",
      "sapId":"51300271",
      "batchNumber":"408",
      "employeeName":"KARTHICK NATARAJAN",
      "email":"Karthick.Natarajan@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA EIS ACC SUPPORT",
      "projectCode":"C/176186",
      "reportingManager":"51661909",
      "sapId":"51372883",
      "batchNumber":"149",
      "employeeName":"CHEERLADINNE NAGARAJU",
      "email":"Nagaraju.C@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA EIS ACC SUPPORT",
      "projectCode":"C/176186",
      "reportingManager":"51677622",
      "sapId":"51435311",
      "batchNumber":"409",
      "employeeName":"BENET BENSIGAR",
      "email":"benet.b@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA-MCA-Mexico",
      "projectCode":"C/150307",
      "reportingManager":"51661909",
      "sapId":"51523179",
      "batchNumber":"346",
      "employeeName":"AARON DAVID FUENTEVILLA TOPETE",
      "email":"Aaron.Topete@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA _EIS_PI_Mexico",
      "projectCode":"C/152310",
      "reportingManager":"51463596",
      "sapId":"51537430",
      "batchNumber":"367",
      "employeeName":"SUMAN KUMAR ALLIMUTHU",
      "email":"sumankumar_a@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA _EIS_PI_Mexico",
      "projectCode":"C/152310",
      "reportingManager":"51463596",
      "sapId":"51545283",
      "batchNumber":"281",
      "employeeName":"BISWAJIT PADHY",
      "email":"padhy.b@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA-MCA-Mexico",
      "projectCode":"C/150307",
      "reportingManager":"51661909",
      "sapId":"51641854",
      "batchNumber":"246",
      "employeeName":"JOSE ANGEL ARAMBURO GONZALEZ",
      "email":"Jose.Angel@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA EIS MCA Mexico",
      "projectCode":"C/140685",
      "reportingManager":"51477851",
      "sapId":"51643140",
      "batchNumber":"302",
      "employeeName":"SIMON PEDRO GUERRERO AGUILAR",
      "email":"Simon.Aguilar@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA",
      "projectCode":"USAA001",
      "reportingManager":"12345678",
      "sapId":"51677622",
      "batchNumber":"001",
      "employeeName":"Guillermina ",
      "email":"guille@hcl.com",
      "role":"1",
      "client":"USAA",
      "workLocation":"VIsta Acueducto",
      "employeeStatus":"Local-nativo",
      "secureQuestions":[
         "What was the name of your elementary / primary school?",
         "What was your childhood nickname?"
      ],
      "secureAnswers":[
         "Simon Bolivar",
         "pingo"
      ],
      "status":"active"
   },
   {
      "projectName":"USAA-EIS-Dev\u0026Testing Infrastructure-RFB",
      "projectCode":"C/180410",
      "reportingManager":"51513074",
      "sapId":"51683024",
      "batchNumber":"166",
      "employeeName":"JORGE LUIS ACEVEDO CARREON",
      "email":"jorge_a@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA EIS ACC SUPPORT",
      "projectCode":"C/176186",
      "reportingManager":"51300271",
      "sapId":"51689024",
      "batchNumber":"371",
      "employeeName":"MARIO ARTURO RUIZ CUEVAS",
      "email":"mario.ruizcuevas@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA EIS ACC SUPPORT",
      "projectCode":"C/176186",
      "reportingManager":"51661909",
      "sapId":"51689959",
      "batchNumber":"223",
      "employeeName":"HUGO ALEJANDRO GUZMAN CHAVEZ",
      "email":"hugoalejandro.g@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA EIS ACC SUPPORT",
      "projectCode":"C/176186",
      "reportingManager":"51435311",
      "sapId":"51702417",
      "batchNumber":"570",
      "employeeName":"ROGELIO COTA MARTINEZ",
      "email":"rogelio.martinez@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA _EIS_PI_Mexico",
      "projectCode":"C/152310",
      "reportingManager":"51477851",
      "sapId":"51728779",
      "batchNumber":"596",
      "employeeName":"OSCAR GUSTAVO CADENA GOMEZ",
      "email":"oscar.cadenagomez@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA EIS ACC SUPPORT",
      "projectCode":"C/176186",
      "reportingManager":"51513074",
      "sapId":"51731191",
      "batchNumber":"405",
      "employeeName":"JOSE CARLOS ORTIZ FLORES",
      "email":"jose.ortizflores@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA EIS ACC SUPPORT",
      "projectCode":"C/176186",
      "reportingManager":"51513074",
      "sapId":"51734394",
      "batchNumber":"422",
      "employeeName":"DAIANA AMEZCUA DUEÑAS",
      "email":"daiana.a@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA-EIS-Dev\u0026Testing Infrastructure-RFB",
      "projectCode":"C/180410",
      "reportingManager":"51498129",
      "sapId":"51738733",
      "batchNumber":"181",
      "employeeName":"LEONARDO NAVARRO ZEPEDA",
      "email":"leonardo.n@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA-MCA-Mexico",
      "projectCode":"C/150307",
      "reportingManager":"51661909",
      "sapId":"51739988",
      "batchNumber":"420",
      "employeeName":"DAVID MAURICIO BOHORQUEZ RUEDA",
      "email":"davidmauricio.b@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   },
   {
      "projectName":"USAA-EIS-Dev\u0026Testing Infrastructure-RFB",
      "projectCode":"C/180410",
      "reportingManager":"51498129",
      "sapId":"51741324",
      "batchNumber":"653",
      "employeeName":"VICTOR HUGO SANDOVAL TUSSI",
      "email":"victorhugo.s@hcl.com",
      "role":"2",
      "client":"USAA",
      "status":"active"
   }] 
 


/*
Params: na
*/
export const getUsers = () =>   dispatch => {
    dispatch({type: USERS_FETCHED, users:dataUsers  });
    return {succes : true};

};

/*
Params: UserToUpdate : { }
*/
export const updateUser = (user) =>   dispatch => {
    dispatch({type: USERS_UPDATED, users: [user]  });
    return { succes : true };

};

export const deleteUser = (user) =>   dispatch => {
    dispatch({type: USERS_DELETED, users: [user]  });
    return { succes : true };

};
  