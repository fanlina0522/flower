import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import IndexComponent from './modules/index/IndexComponent'//主页

export default (
    <Route path="/" component={AppComponent}>
       <Route path="index" component={IndexComponent} />
    </Route>
)

