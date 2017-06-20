import * as constants from '../../redux/commonConstant'

export function plus(){

    return {
        type:constants.PLUS
    }
}

export function minus(){
    return {
        type:constants.MINUS
    }
}

export function getdetail(data){

    return {
        types: [constants.DETAIL_REQUEST, constants.DETAIL_SUCCESS, constants.DETAIL_FAILURE],
        path: 'produtname',
        method: 'post',
        query: data
    }
}


export function goshopCar(data){
    return {
        types:[constants.DETAIL_REQUEST, constants.DETAIL_SUCCESS, constants.DETAIL_FAILURE],
        path : 'carList',
        method : 'post',
        query: data
    }
}












































