import index from '../modules/index/IndexReducer'

import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    index,
    router

})

export default rootReducer