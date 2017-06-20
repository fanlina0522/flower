import * as types from '../../redux/commonConstant'

export default function(state = {nomore:false,loading: false,active:0,goodsdata:[],lastFetched:false,filter:false}, action){
    let listState = JSON.parse(JSON.stringify(state))
    var moreArr = [];
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

        case types.PRODUT_REQUEST:
            listState.loading = true
            break;

        case types.PRODUT_SUCCESS:
            
            if (action.body.data) {
                // moreArr.push(action.body.data)
                // console.log(listState.goodsdata)
                listState.goodsdata = action.body.data;
                listState.lastFetched = action.lastFetched 
            }else{
                listState.nomore = true;
            }
            listState.loading = false
            break;

        case types.PRODUT_FAILURE:
            listState.error = action.error;
            listState.loading = false;
            listState.nomore = false;
            break;

        default:
            listState.active= 0;
            listState.filter = false;

    }
    return listState;
}