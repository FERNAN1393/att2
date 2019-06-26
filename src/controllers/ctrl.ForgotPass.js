/**
*   Description: Controller file for forgot pass
**/

const output = {
    
}


//  chkSapId function controller
//  input:  sapId
//  output: Security questions(Obj)
export const chkSapId = passObj => {
    if( passObj == "12345678" )
        return {
            data: "chingo de data",
        };
    return false;
};