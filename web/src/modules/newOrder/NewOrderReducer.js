import * as types from '../../redux/commonConstant'

export default function(state = {loading: false,status:false,orderdata:[],lastFetched:false},action){
    let orderState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.ORDER_REQUEST:
            orderState.loading = true;
            orderState.status = false;
            break;
        case types.ORDER_SUCCESS:
            console.log(action.lastFetched)
            if(action.body.data) {
                orderState.orderdata = action.body.data;
                orderState.lastFetched = action.lastFetched
            }
            orderState.status = true;
            orderState.lastFetched = action.lastFetched

            orderState.loading = false
            break;

        case types.ORDER_FAILUER:
            orderState.status = false;
            orderState.error = action.error
            orderState.loading = false
            break;
    }
    return orderState;
}