/**
*   Description: Controller file, will autorize users to loggin, only for Login purpose  
**/

//  chkSapId function controller
//  input:  sapId
//  output: Security questions(Obj)
export const chkSapId = passObj => {
    console.log("im in controller", passObj)
    if( passObj.sapId === "12345678" )
        return true;
    return false;
};