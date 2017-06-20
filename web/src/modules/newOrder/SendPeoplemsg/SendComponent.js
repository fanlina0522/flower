 import React,{Component} from 'react'
 import './send.scss'

 import TitleComponent from "../TitleComponent/TitleComponent";

 var ReactRouter = require("react-router");
 var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

 class SendComponent extends Component{
         constructor(props){
             super(props)
         }
        sendMsg(){
            window.localStorage.removeItem('send_msg');
            let obj = {
                name:this.refs.sendName.value,
                phone:this.refs.sendPhone.value
            };
            window.localStorage.setItem('send_msg',JSON.stringify(obj));

            window.location.href = '#/newOrder';
        }
        render(){
            return(
                <div className="send-container">
                    <TitleComponent title={'订花人信息'}/>
                    <div className="send-main">
                        <div className="input-msg">
                            <input type="text" ref="sendName" placeholder="订花人姓名"/>
                            <input type="text" ref="sendPhone" placeholder="订花人手机号码" />
                        </div>
                        <div className="btn_sure" onClick={this.sendMsg.bind(this)}>确定</div>
                    </div>
                </div>
            )
        }
 }

export  default SendComponent