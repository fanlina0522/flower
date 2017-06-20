import login from '../modules/login/LoginReducer'
import regist from '../modules/regist/RegistReducer'
// import seePrice from '../modules/List/ListReducer'
import goods from '../modules/Goods/GoodsReducer'
import detail from '../modules/detail/DetailReducer'
import neworder from '../modules/newOrder/NewOrderReducer'

import car from '../modules/car/CarReducer'

// user  list
import taplist from '../modules/usercenter/TapListComponent/TapListReducer'
import ucmsgsave from '../modules/usercenter/MsgComponent/MsgReducer'
import amendPsw from '../modules/usercenter/AmendPswComponent/AmendPswReducer'

import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    regist,
    goods,
    detail,
    neworder,
    router,
    ucmsgsave,
    amendPsw,
    taplist,
    car
})

export default rootReducer