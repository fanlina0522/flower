import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import HomeComponent from './modules/home/HomeComponent'//主页
import ListComponent from './modules/List/ListComponent'//分类列表
import GoodsComponent from './modules/Goods/GoodsComponent'//商品列表
import DetailComponent from './modules/detail/DetailComponent'//商品详情
import CarComponent from './modules/car/CarComponent'
import NewOrderComponent from './modules/newOrder/NewOrderComponent'//订单页
//完善订单信息页
import SendmsgComponent from'./modules/newOrder/SendPeoplemsg/SendComponent'
import FlowerNeedComponent from './modules/newOrder/flowerNeed/FlowerComponent'
import CartComponent from './modules/newOrder/cartMsg/CartComponent'
import CashComponent from './modules/newOrder/cashNeed/CashComponent'
import AddviceComponent from './modules/newOrder/adviceMsg/AdviceComponent'
//提交订单成功
import OrderDetailComponent from './modules/orderDetail/OrderDetailComponent'


import LoginComponent from './modules/login/LoginComponent'//登录
import RegistComponent from './modules/regist/RegistComponent'//注册
//user
import UcComponent from './modules/usercenter/UcComponent/UcComponent'
import OrderComponent from './modules/usercenter/OrderComponent/OrderComponent'
import ExpressageComponent from './modules/usercenter/ExpressageComponent/ExpressageComponent'
import MsgComponent from './modules/usercenter/MsgComponent/MsgComponent'
import AddressComponent from './modules/usercenter/AddressComponent/AddressComponent'
import AmendPswComponent from './modules/usercenter/AmendPswComponent/AmendPswComponent'
import AmendAdrComponent from './modules/usercenter/AmendAdrComponent/AmendAdrComponent'
import ConsumerComponent from './modules/usercenter/ConsumerComponent/ConsumerComponent'
import QuanComponent from './modules/usercenter/QuanComponent/QuanComponent'
import ConmentComponent from './modules/usercenter/ConmentComponent/ConmentComponent'
import SpoorComponent from './modules/usercenter/SpoorComponent/SpoorComponent'




// 花语
import FlowersTipsComponent from './modules/home/Flowerstips/FlowersTipsComponent' 
import Tips1 from './modules/home/Flowerstips/tipsComponent1' //送花常识
import Tips2 from './modules/home/Flowerstips/tipsComponent2'
import Tips3 from './modules/home/Flowerstips/tipsComponent4'
import Tips4 from './modules/home/Flowerstips/tipsComponent4'
import Tips5 from './modules/home/Flowerstips/tipsComponent5'
import Tips6 from './modules/home/Flowerstips/tipsComponent6'
import Tips7 from './modules/home/Flowerstips/tipsComponent7'
import Tips8 from './modules/home/Flowerstips/tipsComponent8'
import Tips9 from './modules/home/Flowerstips/tipsComponent9'
import Tips10 from './modules/home/Flowerstips/tipsComponent10'
import Tips11 from './modules/home/Flowerstips/tipsComponent11'

export default (
    <Route path="/" component={AppComponent}>
        <Route path="index" component={HomeComponent} />
            <Route path="login" component={LoginComponent} />
            <Route path="regist" component={RegistComponent} />

        <Route path="list" component={ListComponent} >
        </Route>
        <Route path="goods/:id" component={GoodsComponent}/>
        <Route path="detail/:id" component={DetailComponent} />
        <Route path="car" component={CarComponent} />

        <Route path="newOrder" component={NewOrderComponent}/>
        <Route path="sendMsg" component={SendmsgComponent}/>
        <Route path="flowerNeed" component={FlowerNeedComponent}/>
        <Route path="cart" component={CartComponent} />
        <Route path="cash" component={CashComponent} />
        <Route path="addvice" component={AddviceComponent} />
        <Route path="orderDetail" component={OrderDetailComponent}/>

        <Route path="usercenter" component={UcComponent}/>
        <Route path="order" component={OrderComponent}/>
        <Route path="expressage" component={ExpressageComponent}/>
        <Route path="msg" component={MsgComponent}>
            <Route path="msg2" component={MsgComponent}></Route>
        </Route>
        <Route path="address" component={AddressComponent}/>
        <Route path="amend" component={AmendAdrComponent}/>
        <Route path="amendPsw" component={AmendPswComponent}/>
            <Route path="cus" component={ConsumerComponent}/>
            <Route path="quan" component={QuanComponent}/>
            <Route path="conment" component={ConmentComponent}/>
            <Route path="spoor" component={SpoorComponent}/>


    
        <Route path='flowerstips' component={FlowersTipsComponent}/>
        <Route path='tips1' component={Tips1}/>
        <Route path='tips2' component={Tips2}/>
        <Route path='tips3' component={Tips3}/>
        <Route path='tips4' component={Tips4}/>
        <Route path='tips5' component={Tips5}/>
        <Route path='tips6' component={Tips6}/>
        <Route path='tips7' component={Tips7}/>
        <Route path='tips8' component={Tips8}/>
        <Route path='tips9' component={Tips9}/>
        <Route path='tips10' component={Tips10}/>
        <Route path='tips11' component={Tips11}/>
       
    </Route>
)

