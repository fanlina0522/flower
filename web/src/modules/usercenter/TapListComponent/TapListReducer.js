//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../../redux/commonConstant'

export default function(state = {loading:false,array:[]}, action){

    let resState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.TAPLIST_REQUEST:
            resState.loading = true
            break
        case types.TAPLIST_SUCCESS:
            resState.array = action.body
            resState.loading = false
            break
        case types.TAPLIST_FAILURE:
            resState.error = action.error
            resState.loading = false
            break
    }
    return resState;
}