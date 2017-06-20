import React,{Component} from 'react'

import TitleTopComponet from '../TitleTopComponent/TitleTopComponent'
import './OrderDetail.scss'
export  class OrderDetailComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            orderList:JSON.parse(window.localStorage.getItem('orderDetail'))||[],
            cashprice:Number(0),
            price:Number(0),
            data_flower:''
        }
    }

    componentDidMount(){
        console.log(this.state.orderList);

        if(typeof(this.state.orderList.cash) === 'string'){
        }else{
            this.setState({cashprice:10});
        }
        let total = this.state.orderList.goodsprice + this.state.orderList.flowerprice +this.state.cashprice;
        this.setState({price:total})

        if(this.state.orderList.floerprice === 0){
            this.setState({data_flower:'不需要'})
        }else{
            this.setState({data_flower:'需要'})
        }

    }
    render(){
        return(
            <div className="order-detail-container">
                <div className="order-detail-header">
                    <TitleTopComponet title={'提交订单成功'}/>
                </div>
                <main className="order-detail-main">
                    <div className="order-detail-qingkung" >
                        <div>尊敬的&nbsp;{this.state.orderList.username}&nbsp;您好！您的订单已经提交成功</div>
                        <div>订单号: <span>{this.state.orderList.orderId}</span></div>
                        <p className="order_detail_price"><div className="order-detail-xinxi">总商品金额：</div><span className="goods_price">{this.state.orderList.goodsprice}</span></p>
                        <p className="order_detail_price"><div className="order-detail-xinxi">花瓶价格：</div><span className="flower_price">{this.state.orderList.flowerprice}</span></p>
                        <p className="order_detail_price"><div className="order-detail-xinxi">发票邮寄费：</div><span className="cash_price">{this.state.cashprice}</span></p>
                        <p className="order_detail_price"><div className="order-detail-xinxi">订单应付总额：</div><span className="total_price">{this.state.price}</span></p>
                    </div>
                    <div className="order-detail-link">
                        <button className="go-index" onClick={()=>{window.location.hash = 'index'}}>继续去购物</button>
                        <button className="go-payhtml">去支付</button>
                    </div>
                    <div className="order-detail-msg">
                        <div className="order_detail_msg">商品信息</div>
                        <ul className="order-detail-goodslist">
                            {
                                this.state.orderList.goods.map(function(item){
                                    return <li>
                                        <div className="newOrder-list-left">
                                            <img src={`src/static/imgs/${item.url}`} />
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
                    </div>
                    <div className="order-detail-appactmsg">
                        <div className="order_detail_msg">收货人信息</div>
                        <p>姓名: <span>{this.state.orderList.appectMsg.appect_name}</span></p>
                        <p>电话：<span>{this.state.orderList.appectMsg.appect_phone}</span></p>
                        <p>地址：<span>{this.state.orderList.appectMsg.appect_address}</span></p>
                    </div>
                    <div className="order-detail-appactmsg">
                        <div className="order_detail_msg">其他信息</div>
                        <p>是否需要花瓶：<span>{this.state.data_flower}</span></p>
                        <p>贺卡信息：<span>{this.state.orderList.cart}</span></p>
                    </div>
                    <div className="order-detail-appactmsg">
                        <div className="order_detail_msg">发票信息</div>
                        <p>发票抬头：<span>{this.state.orderList.cash.cartcompany}</span></p>
                        <p>收件人: <span>{this.state.orderList.cash.appect_people}</span></p>
                        <p>手机：<span>{this.state.orderList.cash.cash_phone}</span></p>
                        <p>邮寄地址：<span>{this.state.orderList.cash.cash_address}</span></p>
                    </div>
                </main>
            </div>
        )
    }
}

export default OrderDetailComponent