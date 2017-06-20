import * as constants from '../../redux/commonConstant'

// export function seePrice(data){
// 	console.log(data)
//     return {
//         types: [constants.PRODUT_REQUEST, constants.PRODUT_SUCCESS, constants.PRODUT_FAILURE],
//         path: 'range',
//         method: 'post',
//         query: data
//     }
// }

export function active(idx){
	// console.log(idx)
    return {
        types: [constants.ACTIVE],
        active_idx: idx,
    }
}