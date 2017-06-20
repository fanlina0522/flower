import React,{Component} from 'react'
import './Neworder.scss'
import {connect} from 'react-redux'

import TitleTopComponent from '../TitleTopComponent/TitleTopComponent'

import * as NewOrderAction from './NewOrderAction'

class NewOrderComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            goodsarr:JSON.parse(window.localStorage.getItem('goodsList'))||[],
            gobottom:'none',
            totalprice:Number(0),
            totalqty:Number(0),
            data1:'未填写',
            data2:'未填写',
            data3:'',
            data4:'',
            data5:'',
            data6:'祝福语',
            data7:'不需要',
            data8:'不需要',
            data9:'',
            data10:''

        }
    }
    componentWillMount(){

    }
    componentDidMount(){

        // 计算总价         计算合计数量
        this.move();

        //修改订花人信息
        let send =  JSON.parse(window.localStorage.getItem('send_msg'));

        if(send === null){
           return;
        }else{
            this.setState({data1:send.name});
            this.setState({data2:send.phone});
        }
        //修改收花人信息
        let appect = JSON.parse(window.localStorage.getItem('default'));
        console.log(appect);
        let cityMsg = appect._msg3 + appect._msg4;
        this.setState({data3:appect._msg1})
        this.setState({data4:appect._msg2})
        this.setState({data5:cityMsg});

        //添加祝福语
        let cart = JSON.parse(window.localStorage.getItem('cart_msg'));
        if(cart === null){
            return
        }else{
            this.setState({data6:cart});
        }
        //花瓶选择
        let flower = JSON.parse(window.localStorage.getItem('flower_msg'));
        if(flower === null){
            return;
        }else{
            this.setState({data7:flower.flowerMsg});
        }
        //发票信息
        let cash = JSON.parse(window.localStorage.getItem('cash_msg'));
        // console.log(123,cash)
        if(cash === null || cash.cashMsg === '不需要'){
            return;
        }else{
            this.setState({data8:'需要'})
            this.setState({data10:cash})
            console.log(this.state);
        }

        //给商家留言
        let advice = JSON.parse(window.localStorage.getItem('advice_msg'));
        if(advice === null){
            return;
        }else{
            this.setState({data9:advice})
        }

    }
    // 写入 总价 与数量
    move(){
        // 初始化
        this.state.totalprice = 0;
        this.state.totalqty = 0;
        // 计算总价         计算合计数量
        this.state.goodsarr.map(function(item){
            let totalprice = 0;let totalqty = 0;
            totalprice += (parseInt(item.price))*item.qty;
            totalqty +=parseInt(item.qty);
            this.setState({totalprice: this.state.totalprice +=totalprice});
            this.setState({totalqty: this.state.totalqty +=totalqty});             
        }.bind(this));
    }    

    //提交订单,切换到OrderDetailComponent
    //订单信息：用户名、订单编号、goodsarr(图片，数量、名称、单价)、商品总额、花瓶费用、发票邮寄费、收货人、发票信息、
    submitOrder(){
        //获取用户名
        let usermsg = JSON.parse(window.localStorage.getItem('data'));
        //订单编号
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth()+1;//0-11
        let date = now.getDate();
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        month = month<10 ? '0'+month : month;
        date = date<10 ? '0'+date : date;
        hour = hour<10 ? '0'+hour : hour;
        min = min<10 ? '0'+min : min;
        sec = sec<10 ? '0'+sec : sec;
        let orderId = `${year}${month}${date}${hour}${min}${sec}`;
        //是否需要花瓶
        let flower_need = this.state.data7;
        let _flower;
        if(flower_need === '需要'){
            _flower = 30;
        }else if(flower_need === '不需要'){
            _flower = 0;
        }

        //是否需要发票
        let _cash;
        if(flower_need === '需要'){
            _cash = '不需要';
        }else if(flower_need === '不需要'){
            _cash = this.state.data10;
        }
        //收花人信息
        let appect = {
            appect_name:this.state.data3,
            appect_phone:this.state.data4,
            appect_address:this.state.data5
        }
        let obj ={
            username:usermsg.username,
            goods:this.state.goodsarr,
            orderId:orderId,
            appectMsg:appect,
            goodsprice:this.state.totalprice,
            flowerprice:_flower,
            cart:this.state.data9,
            cash:_cash,
            paid:false
        }

        this.props.submit(obj).then(response=>{

            if (response.lastFetched) {

            }
        });;
        //提交成功后要清除所有本地存贮，并且删除数据库里car的内容
        window.localStorage.setItem('orderDetail',JSON.stringify(obj));


        window.location.hash = 'orderDetail'
    }
    render(){
       return(
           <div className="newOrder-container">
               <div className="newOrder-header">
                   <TitleTopComponent title={'填写订单'}/>                 
               </div>
               <main className="newOrder-main">
                   <div className="newOrder-list">
                       <ul className="newOrder-list-ul">
                           {
                               this.state.goodsarr.map(function(item){
                                   return  <li>
                                       <div className="newOrder-list-left">
                                           <img src={`src/static/imgs/${item.url}`}  />
                                       </div>
                                       <div className="newOrder-list-right">
                                           <div className="newOrder-goods-name">
                                               名称：<span className="newOrder_goodsName">{item.name}</span>
                                           </div>
                                           <div className="newOrder-goods-qty">
                                               数量：<span className="newOrder_goodsqyt">{item.qty}</span>
                                           </div>
                                           <div className="newOrder-goods-price">
                                               价格：<span className="newOrder_goodsPrice">{item.price}</span>
                                           </div>
                                       </div>
                                   </li>
                               })
                           }
                       </ul>
                       <div className="newOrder-qty-price">
                          共<span>{this.state.totalqty}</span>件商品,合计<span>{this.state.totalprice}</span>元
                       </div>
                   </div>
                   <div className="newOrder-select">
                       <div className="newOrder-peopleSend" id="_send">
                           <div className="box_box"><i className="iconfont icon-wode"></i>订花人信息 <span className="newOrder-reset" onClick={()=>{window.location.hash="sendMsg"}}>修改</span></div>
                           <div>您的姓名：<span className="peoplesend-name">{this.state.data1}</span></div>
                           <div>您的手机：<span className="peoplesend-phone">{this.state.data2}</span></div>
                       </div>
                       <div className="newOrder-peopleAccpet">
                           <div className="box_box"><i className="iconfont icon-wode"></i>收花人信息 <span className="newOrder-reset" onClick={()=>{window.location.href="#/expressage"}}>修改</span></div>
                           <div><span className="accept-name"></span>{this.state.data3}&nbsp;<span className="accpet">{this.state.data4}</span></div>
                           <div><span className="city-msg">{this.state.data5}</span></div>
                       </div>
                       <div className="newOrder-cartMsg">
                           <div className="box_box"><i className="iconfont icon-faheqia"></i>贺卡信息 <span className="newOrder-reset" onClick={()=>{window.location.href="#/cart"}}>修改</span></div>
                           <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.data6}</div>
                       </div>
                       <div className="newOrder-isBox">
                           <div className="box_box"><i className="iconfont icon-faheqia"></i>是否需要花瓶（￥30/个,随机发放）<span className="newOrder-reset" onClick={()=>{window.location.href="#/flowerNeed"}}>修改</span></div>
                           <div className="isNeed-flower">{this.state.data7}</div>
                       </div>
                       <div className="newOrder-isCash">
                           <div className="box_box"><i className="iconfont icon-faheqia"></i>发票信息（发票寄送费￥10.00）<span className="newOrder-reset" onClick={()=>{window.location.href="#/cash"}}>修改</span></div>
                           <div className="isNeed-cash">{this.state.data8}</div>
                       </div>
                       <div className="newOrder-adcive">
                           <div className="box_box"><i className="iconfont icon-faheqia"></i>给商家留言 <span className="newOrder-reset" onClick={()=>{window.location.href="#/addvice"}}>修改</span></div>
                           <div className="write-contant">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.data9}</div>
                       </div>
                   </div>
               </main>
               <footer className="newOrder-footer">
                   <div className="newOrder-totalprice">共<span>{this.state.totalqty}</span>件，合计：<span className="newOrder-total">{this.state.totalprice}</span>元</div>
                   <div className="newOrder-balance" onClick={this.submitOrder.bind(this)}>提交订单</div>
               </footer>
           </div>
       )
   }
}


const mapStateToProps = state => ({
    state: state.neworder.loading,
    orderdata:state.neworder.cardata,
    lastFetched:state.neworder.lastFetched,
})

export default connect(mapStateToProps,NewOrderAction)(NewOrderComponent)
