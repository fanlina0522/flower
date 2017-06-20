import * as constants from '../../../redux/commonConstant'

// export function login(username, password){
//     return {
//         types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
//         path: 'login',
//         method: 'post',
//         query: {username, password}
//     }
// }

export function getData(pay){
    return {
        types: [constants.TAPLIST_REQUEST, constants.TAPLIST_SUCCESS, constants.TAPLIST_FAILURE],
        path: 'getData',
        method: 'get',
        query: {pay}
    }
}