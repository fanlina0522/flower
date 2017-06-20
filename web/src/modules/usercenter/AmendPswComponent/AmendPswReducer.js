import * as types from '../../../redux/commonConstant'

export default function(state = {status:''} , action){

    let resState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.PSW_REQUEST:
            break
        case types.PSW_SUCCESS:
            resState.amendPsw = action.body
            break
        case types.PSW_FAILURE:
            break
    }
    return resState;
}