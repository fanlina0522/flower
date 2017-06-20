import * as constants from '../../../redux/commonConstant'


export function amendPsw(username,password){
    return {
        types: [constants.PSW_REQUEST, constants.PSW_SUCCESS, constants.PSW_FAILURE],
        path: 'amendPsw',
        method: 'post',
        query: {username:username,password:password}
    }
}