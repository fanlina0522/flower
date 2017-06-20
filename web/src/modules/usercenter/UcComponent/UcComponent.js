import React,{Component} from 'react'
import'./UcComponent.scss' 
import {Link,browserHistory} from 'react-router'

import BottomNavComponent from '../../home/bottomNav/BottomNavComponent'


class UcComponent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			clsname:'login',
			name:null
		}
	}
	componentWillMount(){
		let userData = JSON.parse(window.localStorage.getItem('data'))
		userData ? (this.setState({clsname:'exit'})) : this.setState({clsname:'login'})
 	}
 	componentDidMount(){
		let userData = JSON.parse(window.localStorage.getItem('data'))
		userData ? (this.refs.level.style.display = 'block' , this.setState({name:userData.username}) )  : (this.refs.level.style.display = 'none',window.location.href = '#/login')
	}
 	changeStatus(event){
 		let currentBtn = event.target.classList.contains('ad-icon-exit')
 		if(currentBtn){
 			window.localStorage.setItem('data',null)

			let userData = JSON.parse(window.localStorage.getItem('data')) 
			if(!userData){
				this.refs.level.style.display = 'none'
				this.setState({clsname:'login',name:null}) 

				//dio弹出
				this.refs.diotips.classList.add('ad-popup-in')
				this.refs.diobg.style.display = 'block'
			}

 		}else{
 			window.location.href = '#/login'
 		}
 	}
	hidebg(event){
		this.refs.diobg.style.display = 'none'
		this.refs.diotips.classList.remove('ad-popup-in')
	}
	render(){
		return (
			<div className="user">
				<header id="header" className="mui-bar1 mui-bar-nav1">
					<h1 className="mui-title1">个人中心</h1>
					<Link onClick={()=>window.history.back()} className="mui-icon1 mui-icon-left-nav mui-pull-left"></Link>
					<a  className={`mui-icon1 mui-pull-right1 ad-icon-`+ this.state.clsname} onClick={this.changeStatus.bind(this)}></a>
				</header> 
				
				<div className="Uccontent flexbox">
					<div className="index-user">
				        <div className="avatar">
				            <img src='src/static/imgs/user/test.png'/>
				        </div>
				        <div className="name" >{this.state.name}</div>
				        <span className="level" style={{display:'none'}} ref='level'>普通会员</span>
				    </div>	

					<div className="index-order ui-border-b use_index-order">
				        <div className="group">
				            <div className="flex">
				                <div className="flex-col">
				                    <Link className="item" to='/order?=1'>
				                        <img src="src\static\imgs/o1.png" className="ico"/> 
				                        <div className="label">待付款</div>
				                    </Link>
				                </div>
				                <div className="flex-col">
				                    <Link className="item" to='/order?=2'>
				                        <img src="src\static\imgs/o2.png" className="ico"/>
				                        <div className="label">待配送</div>
				                    </Link>
				                </div>
				                <div className="flex-col">
				                    <Link className="item" to='/order?=3'>
				                        <img src="src\static\imgs/o3.png" className="ico"/>
				                        <div className="label">待评价</div>
				                    </Link>
				                </div>
				            </div>
				        </div>
				        <div className="all">
				            <i className="arrow"></i>
				            <Link className="item" to='/order?=0'>
				                <img src="src\static\imgs/o4.png" alt="" className="ico"/>
				                <div className="label">全部订单</div>
				            </Link>
				        </div>
				    </div>
					
					<div className="index-menu mui-row ui-border-tb">
				        <div className="col mui-col-xs-3">
				            <Link className="item" to='/cus'>
				                <div className="ico"><img src="src/static/imgs/money.png" alt=""/></div>
				                <div className="label">消费金额</div>
				            </Link>
				        </div>
				        <div className="col mui-col-xs-3">
				            <Link className="item" to='/quan'>
				            	<div className="ico"><img src="src/static/imgs/quan.png" alt=""/></div>
				                <div className="label">代金券</div>
				            </Link>
				        </div>
				        <div className="col mui-col-xs-3" to='/conment'>
				            <Link className="item" to='/conment'>
				            	<div className="ico"><img src="src/static/imgs/pingjia.png" alt=""/></div>
				                <div className="label">我的评价</div>
				            </Link>
				        </div>
				        <div className="col mui-col-xs-3" >
				            <Link className="item" to='/spoor'>
				            	<div className="ico"><img src="src/static/imgs/jiao.png" alt=""/></div>
				                <div className="label">我的足迹</div>
				            </Link>
				        </div>
				        <div className="col mui-col-xs-3">
				            <Link className="item" to='/msg'>
				            	<div className="ico"><img src="src/static/imgs/user.png" alt=""/></div>
				                <div className="label">个人信息</div>
				            </Link>
				        </div>
				        <div className="col mui-col-xs-3">
				            <Link className="item" to='/expressage'>
				            	<div className="ico"><img src="src/static/imgs/list.png" alt=""/></div>
				                <div className="label">常用收货人</div>
				            </Link>
				        </div>
				        <div className="col mui-col-xs-3">
				            <Link className="item" to='/amendPsw'>
				            	<div className="ico"><img src="src/static/imgs/pwd.png" alt=""/></div>
				                <div className="label">修改密码</div>
				            </Link>
				        </div>
				        <div className="col mui-col-xs-3">
				            <a className="item">
				            	<div className="ico"><img src="src/static/imgs/kefu.png" alt=""/></div>
				                <div className="label">在线咨询</div>
				            </a>
				        </div>
				        <div className="col mui-col-xs-3">
				            <a className="item" >
				            	<div className="ico"><img src="src/static/imgs/nav7.png" alt=""/></div>
				                <div className="label">关于我们</div>
				            </a>
				        </div>
				    </div>
				</div>
			    <BottomNavComponent style={{position:'fixed'}}/>
			    <div className="ad-popup"  ref='diotips' >
				    <div className="mui-popup-inner">
					    <div className="mui-popup-title">提示</div>
					    <div className="mui-popup-text">已退出登录！</div>
				    </div>
				    <div className="mui-popup-buttons">
					    <span className="mui-popup-button" onClick={this.hidebg.bind(this)}>否</span>
					    <span className="mui-popup-button mui-popup-button-bold" onClick={this.hidebg.bind(this)}>是</span>
				    </div>
			    </div>
			    <div className="mui-popup-backdrop mui-active" style={{display:'none'}} ref='diobg'></div>

			</div>
		)
	}
}

export default UcComponent