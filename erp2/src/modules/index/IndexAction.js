import * as constants from '../../redux/commonConstant'

export function seek(_name, _name2){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: '/add',
        method: 'get',
        query: {_name, _name2}
    }

}

