import React,{Component} from 'react'
import './AddressComponent.scss'

import Ucheader2Component from '../Ucheader2Component/Ucheader2Component'

class AddressComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			msg1:null,
			msg2:null,
			msg3:null,
			msg4:null,
			status:null,
			userAdr:[]
		}
	}
	componentDidMount(){
		//操作真实DOM节点
		this.refs.head.refs.icon.classList.remove('mui-icon-bars')
		this.refs.head.refs.icon.classList.add('mui-icon-save')
	}
	switch(){
		this.refs.switch.classList.toggle('mui-active')
		let status = this.refs.switch.classList.contains('mui-active')
		status ? this.setState({status:true}) : this.setState({status:null})
	}
	saveAdr(event){
		if(event.target.tagName =='A'){
			let obj={
			_msg1 : this.state.msg1,
			_msg2 : this.state.msg2,
			_msg3 : this.state.msg3,
			_msg4 : this.state.msg4
			}
			
			/*
				2)数据库处理
					1.库名 flower 集合 userdata
			*/
			 
			// 1) 本地存储方式

			//设置默认地址
			if(this.state.status){
				window.localStorage.setItem('default',JSON.stringify(obj))
			}
			let userAdr = JSON.parse(window.localStorage.getItem('user')) || this.state.userAdr ;
			userAdr.push(obj)
			// this.setState({userAdr:userAdr})
			window.localStorage.setItem('user',JSON.stringify(userAdr))
			

			
		}
	}
	render(){
		return (
			<div className='Address' onClick={this.saveAdr.bind(this)}>
				<Ucheader2Component ref='head' title = {'添加地址'}/>
				<div className="mui-content">
			        <form className="address-form">
			            <div className="ui-cells">
			                <label className="ui-cell ui-cell-stable">
			                    <div className="ui-cell-label">收 花 人：</div>
			                    <input className="flex-col ui-txtin mui-input-clear" type="text" placeholder="收花人姓名" ref='msg1' onChange={()=>this.setState({msg1:this.refs.msg1.value})}/><span className="mui-icon mui-icon-clear mui-hidden"></span>
			                </label>
			                <label className="ui-cell ui-cell-stable">
			                    <div className="ui-cell-label">联系方式：</div>
			                    <input className="flex-col ui-txtin mui-input-clear" type="number" placeholder="收花人手机" ref='msg2' onChange={()=>this.setState({msg2:this.refs.msg2.value})}/><span className="mui-icon mui-icon-clear mui-hidden"></span>
			                </label>
			                <label id="city-picker" className="ui-cell ui-cell-btn" >
			                    <div className="ui-cell-label">收货地址：</div>
			                    <input className="flex-col ui-txtin mui-input-clear" placeholder="例如：广东省/广州市/天河区" ref='msg3' onChange={()=>this.setState({msg3:this.refs.msg3.value})}/>
			                </label>
			                <label className="ui-cell ui-cell-stable">
			                    <div className="ui-cell-label">详细地址：</div>
			                    <input className="flex-col ui-txtin mui-input-clear" type="text" placeholder="街道/门牌号" ref='msg4' onChange={()=>this.setState({msg4:this.refs.msg4.value})}/><span className="mui-icon mui-icon-clear mui-hidden"></span>
			                </label>
			            </div>
			            <div className="ui-cells mg-t-x">
			                <div className="ui-cell ui-cell-stable">
			                    <div className="flex-col">设为默认地址</div>
			                    <div className="mui-switch mui-switch-blue mui-switch-mini" onClick = {this.switch.bind(this)} ref='switch' value={this.state.value}>
									<div className="mui-switch-handle" ></div>
								</div>
			                </div>
			            </div>
			        </form>
			    </div>
			</div>

			)
	}
}

export default AddressComponent

// style="transition-duration: 0.2s; transform: translate(0px, 0px);"
// style="transition-duration: 0.2s;"