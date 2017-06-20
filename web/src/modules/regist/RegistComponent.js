import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as RegistActions from './RegistAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './RegistComponent.scss'

class RegistComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    registHandler() {
        var status1,status2,status3,status4 = false;

        if(/^[a-z0-9_-]{6,16}$/.test(this.refs.registUsername.value)){
           status1 = true;
         }else{
             alert("用户名不符合6~12位数字字母或下划线组合")
            
         }
         if(/^[a-z0-9]{6,18}$/.test(this.refs.registPassword.value)){
             status2 = true;
         }else{
             alert("密码不符合6~18位数字字母组合")
         }
        if(this.refs.registPassword.value == this.refs.registRepassword.value){
            status3 = true;
        }else{
            alert("两次输入的密码不一致")
        }
        if (status1 & status2 & status3) {
                this.props.regist(this.refs.registUsername.value, this.refs.registPassword.value).then(response => {
                if(response.body.status == true){
                    alert('注册成功')
                      window.location.href = "/#/login"
                }else{
                    alert(response.body.message)
                }
            })
        }
      
        
    }
    testHandler(){
      var regist_btn = this.refs.regist_btn
      this.refs.other_choose.style.display="block"
    }
   backHandler(){
      history.back();
    }
    render() {
        return (
            <div className="regist">
                 <div className="login_bg">
                <div id="headerPop">
                    <div className="headerWarp">
                        <ul className="iconWarp">
                            <li className="iconWarp-left">
                                <span onClick={this.backHandler.bind(this)}></span>
                            </li>
                            <li>
                                <h4 className="title">
                                    注册
                                </h4>
                            </li>
                        </ul>
                    </div>
                </div>
           <form>
               <div className="userName">
                <lable className="lable">用户名：</lable>
                <input  type="text"  ref="registUsername" name="name" placeholder="6~12位数字字母或下划线组合"/>
            </div>
            <div className="passWord">
                <lable className="lable">密&nbsp;&nbsp;&nbsp;码：</lable>
                <input type="password"  ref="registPassword" name="password" placeholder="请输入密码"/>
            </div>

            <div className="passWord pas_2">
                <lable className="lable">确认密码：</lable>
                <input type="password" ref="registRepassword" name="password" placeholder="请输入相同密码"/>
            </div>

            <div className="choose_box">
                <div>
                    <lable onClick={this.testHandler.bind(this)} >快速注册 </lable>
                </div>
                    <a href="/#/login">&nbsp;&nbsp;|&nbsp;&nbsp;登录</a>
                    <a href="/#/login">已有用户名?</a>
                
            </div>
            <div className="regist_btn" ref="regist_btn" type="text"  onClick={this.registHandler.bind(this)} >注&nbsp;&nbsp;册</div>
          </form>
                <div ref="other_choose" className="other_choose">
                    <a href="javascript:;">
                       <img src="src/static/imgs/login/qq.png" alt=""/>
                    </a>
                    <a href="javascript:;">
                      <img src="src/static/imgs/login/weibo.png" alt=""/>
                    </a>
                    <a href="javascript:;">
                      <img src="src/static/imgs/login/weixi.png" alt=""/>
                    </a>
                </div>
         
            </div>
             <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.regist.loading
})
export default connect(mapStateToProps, RegistActions)(RegistComponent)


 