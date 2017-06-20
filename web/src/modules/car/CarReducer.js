import * as types from '../../redux/commonConstant'

export default function(state = {loading: false,status:false,cardata:[],lastFetched:false},action){
    let carState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.REQUEST:
            carState.loading = true;
            carState.status = false;
            break;
        case types.SUCCESS:
            console.log(action.lastFetched)
            if(action.body.data) {
                carState.cardata = action.body.data;
                carState.lastFetched = action.lastFetched
            }
            carState.status = true;
            carState.lastFetched = action.lastFetched
            carState.loading = false
            break;

        case types.FAILURE:
            carState.status = false;
            carState.error = action.error
            carState.loading = false
            break;
        case types.REMOVECAR:
            // listState.goodsdata
            break;
    }
    return carState;
}