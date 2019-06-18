/**
*   Description: Controller file for forgot pass
**/

//  chkSapId function controller
//  input:  sapId
//  output: Security questions
export const chkSapId = passObj => {
    console.log("im in controller", passObj)
    if( passObj.sapId === "12345678" )
        return true;
    return false;
};