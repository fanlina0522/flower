import React,{Component} from 'react'
import './QuanComponent.scss'

import Ucheader2Component from '../Ucheader2Component/Ucheader2Component'

class QuanComponent extends Component{
	hide(event){
		if(event.target.tagName !='A'){
			this.refs.head.refs.nav.style.display = 'none'
		}
	}
	render(){
		return (
			<div className='quan' onClick={this.hide.bind(this)}>
				<Ucheader2Component ref='head' title = {'消费总金额'}/>
				<div className="mui-pull-bottom-tips boxbody"><div className="mui-pull-bottom-wrapper"><span className="mui-pull-loading">没有更多数据了</span></div></div>
			</div>

			)
	}
}

export default QuanComponent