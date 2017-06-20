import React,{Component} from 'react'
import './AmendPswComponent.scss'
import {connect} from 'react-redux'
import * as AmendPswAction from './AmendPswAction'

import Ucheader2Component from '../Ucheader2Component/Ucheader2Component'


class AmendPswComponent extends Component{
	constructor(props){
		super(props)
		this.state = {
			username:null,
			status:null,
		}
	}
	componentWillMount(){
		let userData = JSON.parse(window.localStorage.getItem('data'))
		!userData ? window.location.href = '#/login' : this.setState({username:userData.username})
	}
	componentDidMount(){
		this.refs.head.refs.name.innerHTML = "修改密码"
	}
	hide(event){
		if(event.target.tagName !='A'){
			this.refs.head.refs.nav.style.display = 'none'
		}
	}
	amendPsw(){
		if(this.refs.npsw.value != this.refs.psw.value){
			this.setState({status:'两次密码不一致！'})
			this.refs.diotips.classList.add('ad-popup-in')
			this.refs.diobg.style.display = 'block'
			return false
		}
		this.props.amendPsw(this.state.username,this.refs.psw.value).then((res)=>{
			if(res.body.status){
				this.setState({status:'修改成功！'})
				this.refs.diotips.classList.add('ad-popup-in')
				this.refs.diobg.style.display = 'block'
			}else{
				
			}
		})
	}
	hidebg(event){
		this.refs.diobg.style.display = 'none'
		this.refs.diotips.classList.remove('ad-popup-in')
	}
	render(){ 
		return (
			<div className = 'amendPsw' onClick={this.hide.bind(this)}>
				<Ucheader2Component ref='head'/>
				<div className="mui-content">
				    <div className="ui-cells">
				    	<label className="ui-cell ui-cell-stable">用户：
				            <input type="text" className="ui-txtin flex-col mui-input-clear"  value={this.state.username} disabled /><span className="mui-icon mui-icon-clear mui-hidden"></span>
				        </label>
				        <label className="ui-cell ui-cell-stable">
				            <input type="password" className="ui-txtin flex-col mui-input-clear"  placeholder="您的旧密码"/><span className="mui-icon mui-icon-clear mui-hidden"></span>
				        </label>
				        <label className="ui-cell ui-cell-stable">
				            <input type="password" className="ui-txtin flex-col mui-input-clear"  placeholder="新密码" ref='psw'/><span className="mui-icon mui-icon-clear mui-hidden"></span>
				        </label>
				        <label className="ui-cell ui-cell-stable">
				            <input type="password" className="ui-txtin flex-col mui-input-clear"  placeholder="再次输入新密码" ref='npsw'/><span className="mui-icon mui-icon-clear mui-hidden"></span>
				        </label>
				    </div>
				    <div className="ui-btn-wrap">
				        <span className="ui-btn-main ui-btn-lg ui-btn-full" onClick={this.amendPsw.bind(this)}>确定</span>
				    </div>
				</div>

				<div className="ad-popup"  ref='diotips' >
				    <div className="mui-popup-inner">
					    <div className="mui-popup-title">提示</div>
					    <div className="mui-popup-text">{this.state.status}</div>
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

//绑定更新后的数据
const mapStateToProps = state => ({
    amendPsw:state.amendPsw.amendPsw
})

export default connect(mapStateToProps, AmendPswAction)(AmendPswComponent)


