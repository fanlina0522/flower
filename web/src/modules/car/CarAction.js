import * as constants from '../../redux/commonConstant'

export function getCar(){
    return{
        types:[constants.REQUEST,constants.SUCCESS,constants.FAILURE],
        path:'shopCar',
        method:'post',
        query:{}
    }
}

export function delGoods(data){
    return{
        types:[constants.REQUEST,constants.SUCCESS,constants.FAILURE],
        path:'remove',
        method:'post',
        query:data
    }
}

//删除单个商品
export function removecar(data){
    return {
        type: constants.REMOVECAR,
        newCar:data
    }
}