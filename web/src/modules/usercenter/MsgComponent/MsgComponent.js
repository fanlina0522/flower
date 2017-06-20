import React,{Component} from 'react'
import './MsgComponent.scss'
import './font/iconfont.css'

import Ucheader2Component from '../Ucheader2Component/Ucheader2Component'
import PopoverExampleSimple   from '../Select1Component/Select1Component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as MsgAction from './MsgAction'
import {connect} from 'react-redux'


class MsgComponent extends Component{
	constructor(props){
		super(props)
		this.state = {
			name : null,
			birth : null,
			qq : null,
			wechat : null,
			phone : null,
			adress : null,
			mainadr : null,
			gender:null,
			user:null
		}
	}
	componentWillMount(){
		let user = JSON.parse(window.localStorage.getItem('data'))
		!user ? window.location.href = '#/login' : user = user.username
		this.setState({user:user})
		this.props.ucmsgLoad(user)

	}
	componentDidMount(){
		this.refs.head.refs.name.innerHTML = "个人信息"
	}
	hide(event){
		if(event.target.tagName !='A'){
			this.refs.head.refs.nav.style.display = 'none'
		}
	}
	showPage(){
		this.refs.showPage.classList.remove('backbow')
		this.refs.showPage.classList.add('active')
		this.refs.content.classList.add('active')
	}
	backPage(){
		//按键动画
		this.refs.content.classList.remove('active')
		this.refs.showPage.classList.add('backbow')
		let obj  = {
			name : this.refs.name.value,
			gender : this.refs.gender.state.gender,
			birth : this.refs.birth.value,
			qq : this.refs.qq.value,
			wechat : this.refs.wechat.value,
			phone : this.refs.phone.value,
			adress : this.refs.adress.value,
			mainadr : this.refs.mainadr.value,
			user:this.state.user
		}
		//post请求
		this.props.ucmsgSave(obj)

	}
	render(){ 
		return (
			<div className = 'expressage' onClick={this.hide.bind(this)}>
				<Ucheader2Component ref='head'/>
				<div className="mui-content"  ref='content' style={{position:'relative'}}>
					<div className="ui-cells uc-cells-first">
				        <a className="ui-cell ui-cell-access">
				            <div className="uc-info-ico"><i className="iconfont icon-gerenxinxi"></i></div>
				            <div className="flex-col">真实姓名</div>
				            <div className="">{this.props.ucmsg.name}</div>
				        </a>
				        <span id="showSexPicker" className="ui-cell ui-cell-access">
				            <div className="uc-info-ico"><i className="iconfont icon-gender"></i></div>
				            <div className="flex-col">性别</div>
				            <div id="sexResult" className="">{this.props.ucmsg.gender}</div>
				        </span>
				        <span id="showBdayPicker" className="ui-cell ui-cell-access">
				            <div className="uc-info-ico"><i className="iconfont icon-shengri"></i></div>
				            <div className="flex-col">生日</div>
				            <div id="birthDayResult" className="">{this.props.ucmsg.birth}</div>
				        </span>
				    </div>

				    <div className="ui-cells uc-cells">
				        <a className="ui-cell ui-cell-access">
				            <div className="uc-info-ico" ><i className="iconfont icon-qq"></i></div>
				            <div className="flex-col">QQ </div>
				            <div className="">{this.props.ucmsg.qq}</div>
				        </a>
				        <a className="ui-cell ui-cell-access">
				            <div className="uc-info-ico" ><i className="iconfont icon-weixin"></i></div>
				            <div className="flex-col">微信</div>
				            <div className="">{this.props.ucmsg.wechat}</div>
				        </a>
				        <a className="ui-cell ui-cell-access">
				            <div className="uc-info-ico" ><i className="iconfont icon-ordinarymobile"></i></div>
				            <div className="flex-col">手机</div>
				            <div className="">{this.props.ucmsg.phone}</div>
				        </a>
				        <span id="showCityPicker" className="ui-cell ui-cell-access">
				            <div className="uc-info-ico" ><i className="iconfont icon-dingwei"></i></div>
				            <div className="flex-col">地址 </div>
				            <div id="cityResult" className="">{this.props.ucmsg.adress}</div>
				        </span>
				        <a className="ui-cell ui-cell-access">
				            <div className="uc-info-ico" ><i className="iconfont icon-xiangxidizhi"></i></div>
				            <div className="flex-col">详细地址</div>
				            <div className="">{this.props.ucmsg.mainadr}</div>
				        </a>
				        
				    </div>
				    <button type="button" className="ad-btn" onClick={this.showPage.bind(this)}>设置</button>
				</div>
				

				<div className="msgAmend" ref='showPage'>
					<div className="mui-content coverbox">
						<div className="ui-cells">
							<label className="ui-cell ui-cell-stable">
								<div className="">Name：</div>
								<input type="text" className="flex-col ui-txtin mui-input-clear" ref='name'/>
								<span className="mui-icon mui-icon-clear mui-hidden"></span>
							</label>
							<label className="ui-cell ui-cell-stable">
								<div className="">Gender：</div>
								<span className="genderSel">
									<MuiThemeProvider>
										<PopoverExampleSimple ref='gender'/>	
									</MuiThemeProvider>
								</span>
								
								<span className="mui-icon mui-icon-clear mui-hidden"></span>
							</label>
							<label id="mui-icon mui-icon-clear mui-hidden" className="ui-cell ui-cell-btn">
								<div className="">Birthday：</div>
								<input className="flex-col ui-txtin mui-input-clear" ref='birth'/>
							</label>
							<label className="ui-cell ui-cell-stable">
								<div className="">QQ Number：</div>
								<input type="text" className="flex-col ui-txtin mui-input-clear" ref='qq'/>
								<span className="mui-icon mui-icon-clear mui-hidden"></span>
							</label>
							<label className="ui-cell ui-cell-stable">
								<div className="">WeChat：</div>
								<input type="text" className="flex-col ui-txtin mui-input-clear" ref='wechat'/>
								<span className="mui-icon mui-icon-clear mui-hidden"></span>
							</label>
							<label className="ui-cell ui-cell-stable">
								<div className="">Mobilephone：</div>
								<input type="text" className="flex-col ui-txtin mui-input-clear" ref='phone'/>
								<span className="mui-icon mui-icon-clear mui-hidden"></span>
							</label>
							<label className="ui-cell ui-cell-stable">
								<div className="">Adress：</div>
								<input type="text" className="flex-col ui-txtin mui-input-clear" ref='adress'/>
								<span className="mui-icon mui-icon-clear mui-hidden"></span>
							</label>
							<label className="ui-cell ui-cell-stable">
								<div className="">Main-Adress：</div>
								<input type="text" className="flex-col ui-txtin mui-input-clear" ref='mainadr'/>
								<span className="mui-icon mui-icon-clear mui-hidden"></span>
							</label>
						</div>
						<div className="ui-btn-wrap"><span className="ui-btn-main ui-btn-lg ui-btn-full" onClick={this.backPage.bind(this)}>确定</span></div>
						

					</div>
				</div>
				
			</div>
			)
	}
}
//绑定更新后的数据
const mapStateToProps = state => ({
    ucmsg:state.ucmsgsave.ucmsg
})

export default connect(mapStateToProps, MsgAction)(MsgComponent)



