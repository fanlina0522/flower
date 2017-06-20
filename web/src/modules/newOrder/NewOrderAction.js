import * as constants from '../../redux/commonConstant'

export function submit(data){
    console.log('fan',data,232);
    return{
        types:[constants.ORDER_REQUEST,constants.ORDER_SUCCESS,constants.ORDER_FAILUER],
        path:'order',
        method:'post',
        query:data
    }
}