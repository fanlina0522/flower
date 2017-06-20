// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../redux/commonConstant'

export default function(state = {loading: false,active:0,data:{}}, action){
    let listState = JSON.parse(JSON.stringify(state))

    switch(action.type){
        case types.ACTIVE:
            listState.active= action.active_idx;
            break;

        // case types.PRODUT_REQUEST:
        //     listState.loading = true
        //     break;

        // case types.PRODUT_SUCCESS:            
        //     listState.data = action.body;       
        //     listState.lastFetched = action.lastFetched
        //     listState.loading = false
        //     break;

        // case types.PRODUT_FAILURE:
        //     console.log(types.PRODUT_FAILURE)
        //     listState.error = action.error
        //     listState.loading = false
        //     break;

        default:
            listState.active= 0;
    }
    return listState;
}