import * as types from '../../redux/commonConstant'

export default function(state = {loading: false,filter:false}, action){
    let listState = JSON.parse(JSON.stringify(state))

    switch(action.type){
        case types.ACTIVE:
            listState.active= action.active_idx;
            break;

        case types.FIFLTER:
            listState.filter = true;
            break;
        case types.FIFLTER_PUSH:
            listState.filter = false;
            break;

        default:
            listState.active= 0;
            listState.filter = false;

    }
    return listState;
}