import React,{Component} from 'react'
import './AcceptComponent.scss'
import './font/iconfont.css'
import {Link} from 'react-router'


class AcceptComponent extends Component{
	constructor(props){
		super(props)
		this.state = {
			adrList:[]
		}
	}
	componentWillMount(){
		let userAdr = JSON.parse(window.localStorage.getItem('user'))
		let defaultAdr = JSON.parse(window.localStorage.getItem('default'))
		// this.setState({userAdr:userAdr,defaultAdr:defaultAdr})

		//判断默认值
		if(userAdr && defaultAdr){
			for(var item of userAdr){
				if(item._msg1 === defaultAdr._msg1){
					Object.assign(item,{status:'checked'})
				}
			}	
		}
		this.setState({adrList:userAdr})
			
	}
	saveAdr(item,event){
		//跳转

		window.localStorage.setItem('default',JSON.stringify(item))
		
		let userAdr = JSON.parse(window.localStorage.getItem('user'))
		// let defaultAdr = JSON.parse(window.localStorage.getItem('default'))
		// let userAdr = this.state.userAdr
		// let defaultAdr = this.state.defaultAdr

		//判断默认值
		// if(userAdr && defaultAdr){
		// 	for(var item of userAdr){
		// 		if(item._msg1 === defaultAdr._msg1){
		// 			Object.assign(item,{status:'checked'})

		// 		}
		// 	}	
		// }

		//刷新state
		// Object.assign(item,{status:'checked'})
		this.setState({adrList:userAdr})

	}
	render(){
		return(
			<div>
				{(this.state.adrList || []).map((item,index)=>(
					<div className="scroll-wrap"   >
			            <div className="mui-scroll" >
			                <div className="address-card ui-box">
			                        <div className="bd">
			                            <div className="tit">
			                                <span className="ad-name">{item._msg1}</span>
			                            </div>
			                            <div className="ad-phone">Phone：{item._msg2}</div>
			                            <div className="desc" style={{fontSize:16,color:'#000'}}>{item._msg3} {item._msg4}</div>
			                        </div>
			                        <div className="ft flex ">
			                            <label className="ui-checkbox" value={index} onClick={this.saveAdr.bind(this,item)}> 
			                                <input type="radio" value={index} className="iconfont icon-gx1" name="moren" checked={item.status} />
			                                选择地址
			                            </label>

			                            <div className="ad-action">
			                                <Link className="ad-amend" to={{pathname:'amend?id='+ index}} > 
			                                <i className="iconfont icon-xiugai">
			                                </i>修改
			                                </Link>
			                            </div>
			                        </div>
			                    </div>
			            </div>

			    	</div>
					))}
				
			</div>
			)
	}
}

export default AcceptComponent