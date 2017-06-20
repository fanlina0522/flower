import * as constants from '../../redux/commonConstant'

export function seePrice(data){
	// console.log(data)
    return {
        types: [constants.PRODUT_REQUEST, constants.PRODUT_SUCCESS, constants.PRODUT_FAILURE],
        path: 'produtname',
        method: 'post',
        query: data
    }
}

export function getUpDown(data){
    // console.log(data)
    return {
        types: [constants.PRODUT_REQUEST, constants.PRODUT_SUCCESS, constants.PRODUT_FAILURE],
        path: 'produtupdown',
        method: 'post',
        query: data
    }
}

// 筛选显示
export function getfiflter(){
    return {
        type: constants.FIFLTER
    }
}

// 筛选隐藏
export function pushfiflter(){
    return {
        type: constants.FIFLTER_PUSH
    }
}