import React,{Component} from 'react'
import './AmendAdrComponent.scss'

import Ucheader2Component from '../Ucheader2Component/Ucheader2Component'

class AmendAdrComponent extends Component{
	constructor(props){
		super(props)
		this.state = {
			userAdr:null,
			status:null,
			obj:{},
			index:null
		}
	}
	componentWillMount(){
		this.setState({ index:this.props.location.query.id })
		// let userAdr = JSON.parse(window.localStorage.getItem('user'))
		// let obj = userAdr[Number(this.state.index)]
		// this.setState({obj:obj})
	}
	componentDidMount(){
		//
		// this.setState({ index:this.props.location.query.id })
		let userAdr = JSON.parse(window.localStorage.getItem('user'))
		let obj = userAdr[Number(this.state.index)]
		this.setState({obj:obj})

		//
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
				_msg1 : this.refs.msg1.value,
				_msg2 : this.refs.msg2.value,
				_msg3 : this.refs.msg3.value,
				_msg4 : this.refs.msg4.value
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
			userAdr.splice(this.state.index,1,obj)
			window.localStorage.setItem('user',JSON.stringify(userAdr))
		}
	}
	render(){
		return (
			<div className='Address' onClick={this.saveAdr.bind(this)}>
				<Ucheader2Component ref='head' title='编辑地址'/>
				<div className="mui-content">
			        <form className="address-form">
			            <div className="ui-cells">
			                <label className="ui-cell ui-cell-stable">
			                    <div className="ui-cell-label">收 花 人：</div>
			                    <input className="flex-col ui-txtin mui-input-clear" type="text" ref='msg1'  placeholder={this.state.obj._msg1}/> 
			                </label>
			                <label className="ui-cell ui-cell-stable">
			                    <div className="ui-cell-label">联系方式：</div>
			                    <input className="flex-col ui-txtin mui-input-clear" type="number" ref='msg2' placeholder={this.state.obj._msg2}/>
			                </label>
			                 <label className="ui-cell ui-cell-stable">
			                    <div className="ui-cell-label">所在地区：</div>
			                    <input className="flex-col ui-txtin mui-input-clear" type="text" ref='msg3' placeholder={this.state.obj._msg3}/>
			                </label>
			                <label className="ui-cell ui-cell-stable">
			                    <div className="ui-cell-label">详细地址: </div>
			                    <input className="flex-col ui-txtin mui-input-clear" type="text" ref='msg4' placeholder={this.state.obj._msg4}/>
			                </label>
			            </div>
			            <div className="ui-cells mg-t-x">
			                <div className="ui-cell ui-cell-stable">
			                    <div className="flex-col">设为默认地址:</div>
			                    <div className="mui-switch mui-switch-blue mui-switch-mini" onClick={this.switch.bind(this)} ref='switch'>
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

export default AmendAdrComponent