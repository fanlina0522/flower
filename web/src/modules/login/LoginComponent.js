
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './Login.scss'

class LoginComponent extends React.Component {
    constructor(props){
        super(props)
    }

    loginHandler(){
        
        this.props.login(this.refs.username.value, this.refs.password.value).then(response => {
         
          if (response.body.status == true) {
        
                console.log(response.body)
            var obj = JSON.stringify(response.body.data[0]);
            console.log(obj)
                localStorage.setItem("data",obj)
                 alert('登录成功')
              window.location.href = "/#newOrder"
          }else{
             alert(response.body.message)
            }

        })

    }
   backHandler(){
      history.back();
    }
    render(){
        return(
            <div className="login">

            <div className="login_bg">
                <div id="headerPop">
                    <div className="headerWarp">
                        <ul className="iconWarp">
                            <li className="iconWarp-left">
                                <span onClick={this.backHandler.bind(this)}></span>
                            </li>
                            <li>
                                <h4 className="title">
                                    登录
                                </h4>
                            </li>
                        </ul>
                    </div>
                </div>
           <form>
               <div className="userName">
                <lable className="lable">用户名：</lable>
                <input  type="text" ref="username" name="name" placeholder="请输入用户名"/>
            </div>
            <div className="passWord">
                <lable className="lable">密&nbsp;&nbsp;&nbsp;码：</lable>
                <input type="password" ref="password" name="password" placeholder="请输入密码"/>
            </div>
            <div className="choose_box">
                <div>
                    <input type="checkbox" checked="checked" name="checkbox" />
                    <lable>记住密码</lable>
                </div>
                    <a href="/#/regist">&nbsp;&nbsp;|&nbsp;&nbsp;注册</a>
                    <a href="javascript:;">忘记密码</a>
                
            </div>
            <div className="login_btn" type="text" onClick={this.loginHandler.bind(this)}>登&nbsp;&nbsp;录</div>
          </form>

            <div className="other_login">

            <div className="other"></div>
                    <span>其他方式登录</span>
                    <div className="other"></div>
                </div>
                <div className="other_choose">
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
    loading: state.login.loading
})
export default connect(mapStateToProps, loginActions)(LoginComponent)
