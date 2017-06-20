import * as types from '../../../redux/commonConstant'

export default function(state = {ucmsg:'',msgload:''} , action){

    let resState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.MSG_REQUEST:
            break
        case types.MSG_SUCCESS:
            resState.ucmsg = action.body;
            break
        case types.MSG_FAILURE:
            break
    }

    return resState;
}