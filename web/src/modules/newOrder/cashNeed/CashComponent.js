import React,{Component} from 'react'

import './cash.scss'

import TitleComponent from "../TitleComponent/TitleComponent";

class CashComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            tab: [
                {tabName: "不需要",id: 1},
                {tabName: "需要（发票寄送费：￥10.00）", id: 2},
            ],
            currentIndex: 1,
        }
    }

    tabChoiced(id){
        this.setState({
            currentIndex:id
        });
    }
    cashMsg(){
        //判断是那个状态

        window.localStorage.removeItem('cash_msg');
        let need = this.state.currentIndex== 1?true:false;
        if(need){
            let msg = {cashMsg:'不需要'}
            window.localStorage.setItem('cash_msg',JSON.stringify(msg));
        }else{
            let msg = {
                cartcompany:this.refs.cartCompany.value,
                appect_people:this.refs.appect_people.value,
                cash_phone:this.refs.cash_phone.value,
                cash_address:this.refs.cash_address.value
            }
            console.log(msg);
            window.localStorage.setItem('cash_msg',JSON.stringify(msg));
        }

         window.location.href = '/#newOrder';

    }
    render(){
        let isBox1Show=this.state.currentIndex==1 ? 'block' : 'none';
        let isbox2Show=this.state.currentIndex==2 ? 'block' : 'none';
        return(
            <div className="cash-container">
                <TitleComponent title={'发票选择'}/>
                <div className="cash-main">
                    {
                        this.state.tab.map(function(res,index) {

                            let tabStyle = res.id==this.state.currentIndex ? 'iconfont icon-icon': 'iconfont icon-circle';
                            return    <div key={index} onClick={this.tabChoiced.bind(this,res.id)} id="check">{res.tabName}<span id="span_icon" className={tabStyle}></span></div>

                        }.bind(this))
                    }

                    <div className="cash-tab">
                        <div className="kong" style={{"display":isBox1Show}}>
                        </div>
                        <div className="cash-msg-input" style={{"display":isbox2Show}}>
                            <input type="text" ref="cartCompany" placeholder="发票抬头"/>
                            <input type="text" ref="appect_people" placeholder="收件人"/>
                            <input type="text" ref="cash_phone" placeholder="手机或固话"/>
                            <input type="text" ref="cash_address" placeholder="寄送地址（请完整填写省市区等信息）"/>
                        </div>
                    </div>
                    <div className="btn_sure" onClick={this.cashMsg.bind(this)}>确定</div>
                </div>
            </div>
        )
    }
}

export  default CashComponent