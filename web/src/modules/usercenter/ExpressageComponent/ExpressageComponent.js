import React,{Component} from 'react'
import './ExpressageComponent.scss'
import Ucheader2Component from '../Ucheader2Component/Ucheader2Component'
import './AcceptComponent/mui.min.css' 
import {Link,browserHistory} from 'react-router'

import AcceptComponent from './AcceptComponent/acceptComponent'


class ExpressageComponent extends Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}
	// componentWillMount(){
	// 	let userAdr = JSON.parse(window.localStorage.getItem('user'))		
	// }
	componentDidMount(){
		this.refs.head.refs.name.innerHTML = "收货地址"
	}
	hide(event){
		if(event.target.tagName !='A'){
			this.refs.head.refs.nav.style.display = 'none'
		}
	}
	render(){ 
		return (
			<div className = 'expressage' onClick={this.hide.bind(this)}>
				<Ucheader2Component ref='head'/>
				<div className="mui-content ui-scrollview">
					<div className="address-add">
				        <Link className="btn" to='/address'>
				        	<i className="iconfont icon-jia"></i>添加收货地址
				        </Link>
				    </div>
				    <AcceptComponent/>
			    </div>
			</div>
			)
	}
}

export default ExpressageComponent

