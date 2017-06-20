import * as constants from '../../../redux/commonConstant'


export function ucmsgSave(obj){
    return {
        types: [constants.MSG_REQUEST, constants.MSG_SUCCESS, constants.MSG_FAILURE],
        path: 'ucmsgSave',
        method: 'post',
        query: obj
    }
}

export function ucmsgLoad(user){
    return {
        types: [constants.MSG_REQUEST, constants.MSG_SUCCESS, constants.MSG_FAILURE],
        path: 'ucmsgLoad',
        method: 'post',
        query: {user:user}
    }
}